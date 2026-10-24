# Local preview for aniketpant.com on Android/Termux.
#
#   bash scripts/preview.sh          # serve on http://127.0.0.1:4322/
#   bash scripts/preview.sh --check  # serve, test the pages, stop, exit 0/1
#
# Why this exists: `astro dev` loads astro.config.mjs, which imports
# @astrojs/markdown-satteri. That package loads a native binding with no
# android-arm64 build, so the dev server dies before it starts. The preview
# config leaves out that integration, and a small Node loader stub keeps
# Astro's own import of it from failing during content sync.
#
# Run it with `bash`; this file has no shebang because Android has no
# /usr/bin/env.

set -u

cd -- "$(dirname -- "$0")/.." || exit 1

NODE_BIN="${NODE_BIN:-$PREFIX/bin/node}"
if [ ! -x "$NODE_BIN" ]; then
  NODE_BIN="$(command -v node)"
fi
if [ -z "$NODE_BIN" ]; then
  echo "preview: node not found; set NODE_BIN or run inside Termux" >&2
  exit 1
fi

ASTRO_BIN="node_modules/astro/bin/astro.mjs"
CONFIG="astro.preview.config.mjs"
PAGES=(
  "/::Aniket Pant"
  "/projects/::Projects | Aniket Pant"
  "/botfiles/::botfiles | Aniket Pant"
  "/droidfiles/::droidfiles | Aniket Pant"
  "/dotfiles/::dotfiles | Aniket Pant"
)

port_is_free() {
  "$NODE_BIN" -e '
    const net = require("net");
    const srv = net.createServer();
    srv.once("error", () => process.exit(1));
    srv.listen(Number(process.argv[1]), "127.0.0.1", () => srv.close(() => process.exit(0)));
  ' "$1" >/dev/null 2>&1
}

pick_port() {
  local port=4322
  while ! port_is_free "$port"; do
    port=$((port + 1))
    if [ "$port" -gt 4400 ]; then
      echo "preview: no free port between 4322 and 4400" >&2
      exit 1
    fi
  done
  printf '%s\n' "$port"
}

start_server() {
  local port="$1" log="$2" pid_file="$3"
  "$NODE_BIN" --import ./scripts/preview/loader.mjs "$ASTRO_BIN" dev \
    --config "$CONFIG" --port "$port" --host 127.0.0.1 >"$log" 2>&1 &
  echo $! >"$pid_file"
}

stop_server() {
  local pid_file="$1"
  [ -f "$pid_file" ] || return 0
  local pid
  pid="$(cat "$pid_file")"
  if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
    kill "$pid" 2>/dev/null
    for _ in 1 2 3 4 5 6 7 8 9 10; do
      kill -0 "$pid" 2>/dev/null || break
      sleep 0.5
    done
    kill -9 "$pid" 2>/dev/null
  fi
  rm -f "$pid_file"
}

wait_for_server() {
  local base="$1" log="$2" pid_file="$3" deadline=$((SECONDS + 90))
  while [ "$SECONDS" -lt "$deadline" ]; do
    if [ -f "$pid_file" ] && ! kill -0 "$(cat "$pid_file")" 2>/dev/null; then
      echo "preview: server exited before it was ready" >&2
      tail -n 30 "$log" >&2
      return 1
    fi
    if [ "$(curl -s --max-time 3 -o /dev/null -w '%{http_code}' "$base/")" != "000" ]; then
      return 0
    fi
    sleep 2
  done
  echo "preview: server was not ready after 90 seconds" >&2
  tail -n 30 "$log" >&2
  return 1
}

check() {
  local port log base failures=0
  port="$(pick_port)"
  base="http://127.0.0.1:$port"
  dir="$(mktemp -d "${TMPDIR:-/tmp}/astro-preview.XXXXXX")" || exit 1
  log="$dir/server.log"
  pid_file="$dir/server.pid"
  trap "stop_server '$pid_file'; rm -rf '$dir'" EXIT INT TERM

  echo "preview: starting on $base"
  start_server "$port" "$log" "$pid_file"
  if ! wait_for_server "$base" "$log" "$pid_file"; then
    exit 1
  fi

  for item in "${PAGES[@]}"; do
    path="${item%%::*}"
    expected="${item#*::}"
    code=""
    title=""
    for attempt in 1 2; do
      code="$(curl -s --max-time 20 -o "$dir/page.html" -w '%{http_code}' "$base$path")"
      title="$(grep -o '<title>[^<]*</title>' "$dir/page.html" 2>/dev/null | head -1 | sed -e 's|^<title>||' -e 's|</title>$||')"
      [ "$code" = "200" ] && [ "$title" = "$expected" ] && break
      [ "$attempt" = "1" ] && sleep 2
    done
    if [ "$code" = "200" ] && [ "$title" = "$expected" ]; then
      echo "PASS $path ($code, \"$title\")"
    else
      echo "FAIL $path (HTTP $code, title \"$title\", expected \"$expected\")" >&2
      failures=$((failures + 1))
    fi
  done

  if [ "$failures" -ne 0 ]; then
    echo "preview: $failures page(s) failed" >&2
    exit 1
  fi
  echo "preview: all ${#PAGES[@]} pages pass"
}

case "${1:-}" in
  --check)
    check
    ;;
  "" | --serve)
    port="${PREVIEW_PORT:-4322}"
    echo "preview: http://127.0.0.1:$port/ (Ctrl-C to stop)"
    "$NODE_BIN" --import ./scripts/preview/loader.mjs "$ASTRO_BIN" dev \
      --config "$CONFIG" --port "$port" --host 127.0.0.1
    ;;
  *)
    echo "usage: bash scripts/preview.sh [--serve|--check]" >&2
    exit 2
    ;;
esac
