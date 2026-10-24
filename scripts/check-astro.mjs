#!/usr/bin/env node
// Compile-check .astro files without a full `astro build`.
//
// On Android/Termux the build cannot run: satteri ships no arm64 binding, and
// the Markdown pipeline is imported by astro.config.mjs before anything else.
// The Astro compiler itself does have an android-arm64 binding, so parsing and
// transforming each component still catches template and expression errors.
//
//   node scripts/check-astro.mjs            # every .astro under src/
//   node scripts/check-astro.mjs src/pages  # only the given paths

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { transform } from '@astrojs/compiler';

const args = process.argv.slice(2);
const roots = args.length > 0 ? args : ['src'];

function walk(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...walk(path));
    else if (path.endsWith('.astro')) found.push(path);
  }
  return found;
}

const files = roots.flatMap((root) =>
  statSync(root).isDirectory() ? walk(root) : root.endsWith('.astro') ? [root] : []
);

let failed = 0;

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  try {
    const result = await transform(source, { filename: file, sourcemap: false });
    const errors = (result.diagnostics ?? []).filter((d) => d.severity === 1);
    if (errors.length > 0) {
      failed += 1;
      console.error(`✗ ${file}`);
      for (const error of errors) console.error(`  ${error.text}`);
    }
  } catch (error) {
    failed += 1;
    console.error(`✗ ${relative(process.cwd(), file)}`);
    console.error(`  ${error.message}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} of ${files.length} file(s) failed to compile`);
  process.exit(1);
}

console.log(`✓ ${files.length} .astro file(s) compile`);
