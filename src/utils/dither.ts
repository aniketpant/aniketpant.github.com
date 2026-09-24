/**
 * Dithered pattern generator — the shared primitive behind the site's
 * hero backdrop and post fingerprints.
 *
 * A "dithered pattern" here is a low-resolution grid whose cells are
 * quantized from a seeded scalar field down to a tiny palette (the site's
 * CSS variables). Mid-tones of the field are faked with ordered
 * cross-hatching (Bayer), blue-noise thresholds or error diffusion, so the
 * output reads as a blocky, retro bitmap — the same aesthetic as dithered
 * terminal wallpapers.
 *
 * Deterministic: the same seed + field + stops always emit the same grid.
 * Fill colors are emitted as `var(--...)` so one pattern adapts to the
 * light and dark themes at runtime.
 */

import { hashFloats } from './hash';

// ─── Color primitives ────────────────────────────────────────────────────

export type Rgb = [number, number, number];

export const clamp01 = (n: number): number => (n < 0 ? 0 : n > 1 ? 1 : n);

/** '#rrggbb' -> [r, g, b] (0-255) */
export function hexToRgb(hex: string): Rgb {
  const h = hex.replace('#', '');
  const n = Number.parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

export function mixRgb(a: Rgb, b: Rgb, t: number): Rgb {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/** Weighted RGB distance — slightly green-weighted, closer to perception. */
function dist(a: Rgb, b: Rgb): number {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return dr * dr * 0.8 + dg * dg + db * db * 0.6;
}

// ─── The site palette as quantization targets ────────────────────────────
// Concrete RGB values are only used for distance math at build time; the
// emitted fills reference the CSS variables so themes stay in charge.

export type PaletteKey = 'bg' | 'fg' | 'muted' | 'brand' | 'secondary' | 'tertiary';

export interface Swatch {
  key: PaletteKey;
  css: string;
  /** Bias the distance math toward one theme (light values used throughout). */
  rgb: Rgb;
}

export const SWATCHES: Swatch[] = [
  { key: 'bg', css: 'var(--bg)', rgb: hexToRgb('#faf8f5') },
  { key: 'fg', css: 'var(--fg)', rgb: hexToRgb('#1c1917') },
  { key: 'muted', css: 'var(--fg-muted)', rgb: hexToRgb('#78716c') },
  { key: 'brand', css: 'var(--color-brand)', rgb: hexToRgb('#e11d48') },
  { key: 'secondary', css: 'var(--color-secondary)', rgb: hexToRgb('#c026d3') },
  { key: 'tertiary', css: 'var(--color-tertiary)', rgb: hexToRgb('#059669') },
];

/**
 * The same swatches but with the dark theme's actual colors, so a pattern can
 * be quantized twice (once per theme) and stay perceptually correct under
 * either. The `css` values (and therefore the emitted fills) are identical.
 */
export const SWATCHES_DARK: Swatch[] = [
  { key: 'bg', css: 'var(--bg)', rgb: hexToRgb('#070514') },
  { key: 'fg', css: 'var(--fg)', rgb: hexToRgb('#f5eeff') },
  { key: 'muted', css: 'var(--fg-muted)', rgb: hexToRgb('#a090cc') },
  { key: 'brand', css: 'var(--color-brand)', rgb: hexToRgb('#ff00a0') },
  { key: 'secondary', css: 'var(--color-secondary)', rgb: hexToRgb('#b829dd') },
  { key: 'tertiary', css: 'var(--color-tertiary)', rgb: hexToRgb('#00ff9f') },
];

// ─── Seeded fields ────────────────────────────────────────────────────────
// Fields map a normalized coordinate (u, v) in [0,1]² to a scalar in [0,1]
// that is then painted through a gradient of palette stops.

export type FieldName = 'dusk' | 'core' | 'plaid' | 'swell' | 'hero';

const TAU = Math.PI * 2;

function valueNoise(x: number, y: number, seed: number): number {
  const s = Math.sin(x * 12.9898 + y * 78.233 + seed * 37.719) * 43758.5453;
  return s - Math.floor(s);
}

function smoothNoise(x: number, y: number, seed: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = valueNoise(xi, yi, seed);
  const b = valueNoise(xi + 1, yi, seed);
  const c = valueNoise(xi, yi + 1, seed);
  const d = valueNoise(xi + 1, yi + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number, seed: number, octaves = 3): number {
  let amp = 0.5;
  let freq = 1;
  let n = 0;
  for (let i = 0; i < octaves; i++) {
    n += amp * smoothNoise(x * freq, y * freq, seed + i * 137);
    amp *= 0.5;
    freq *= 2.1;
  }
  return n; // ~[0,1]
}

/**
 * Build a deterministic field function. `seed` is a string; every parameter
 * of the field is derived from it, so the field is fully reproducible.
 */
export function makeField(field: FieldName, seed: string): (u: number, v: number) => number {
  switch (field) {
    case 'dusk': {
      // One diagonal sweep with a faint band modulation — gentle wallpaper.
      const [phaseF, freqF, waver] = hashFloats(seed + ':dusk', 3);
      const phase = phaseF * TAU;
      const freq = 1.5 + freqF * 2;
      const amp = 0.03 + waver * 0.05;
      return (u, v) => {
        const t = u * 0.62 + v * 0.38;
        return clamp01(t + Math.sin(t * TAU * freq + phase) * amp);
      };
    }
    case 'core': {
      // Radial pulse from a seeded off-center point, ringed by harmonic bands.
      const [cxF, kF, ringF] = hashFloats(seed + ':core', 3);
      const cx = 0.3 + cxF * 0.4;
      const cy = 0.5;
      const bands = 2 + ringF * 3;
      return (u, v) => {
        const d = Math.hypot(u - cx, v - cy);
        const base = 1 - Math.pow(clamp01(d / 0.9), 1.1);
        const ring = Math.sin(d * TAU * bands + kF * TAU) * 0.08;
        return clamp01(base + ring);
      };
    }
    case 'plaid': {
      // Interference of two sines per axis — lattice/tartan dithering.
      const h = hashFloats(seed + ':plaid', 6);
      const fx1 = 3 + h[0] * 4;
      const fy1 = 2 + h[1] * 3;
      const ph1 = h[2] * TAU;
      const ph2 = h[3] * TAU;
      const fx = 2 + h[4] * 4;
      const fy = 2 + h[5] * 4;
      return (u, v) => {
        const a = 0.5 + 0.5 * Math.sin(u * a1(fx1) + ph1);
        const b = 0.5 + 0.5 * Math.sin(v * a1(fy1) + ph2);
        const c = 0.5 + 0.5 * Math.sin(Math.cos(v * 0.8 + ph1) * u * a1(fx) * TAU + ph2);
        const d = 0.5 + 0.5 * Math.sin(Math.sin(u * 0.8 + ph2) * v * a1(fy) * TAU + ph1);
        return clamp01((a + b + c + d) / 4);
      };
      function a1(s: number): number {
        return s * TAU;
      }
    }
    case 'swell': {
      // Organics: fractal value noise blended with a radial falloff.
      const [scaleF, mixF] = hashFloats(seed + ':swell', 2);
      const scale = 1.5 + scaleF * 2.5;
      const mix = 0.35 + mixF * 0.3;
      const s = seed.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 100000;
      return (u, v) => {
        const noise = fbm(u * scale, v * scale, s, 3);
        const radial = 1 - Math.hypot(u - 0.5, v - 0.5) * 1.15;
        return clamp01(noise * (1 - mix) + radial * mix);
      };
    }
    case 'hero': {
      // Three seeded glows (brand top-right, secondary left-mid, tertiary
      // right-lower) — a dithered take on the old blurry hero blobs.
      const glows = [
        { px: 0.82, py: 0.2, r: 0.62 },
        { px: 0.16, py: 0.58, r: 0.62 },
        { px: 0.9, py: 0.78, r: 0.55 },
      ];
      return (u, v) => {
        let t = 0;
        for (const g of glows) {
          const d = Math.hypot(u - g.px, v - g.py) / g.r;
          if (d < 1) t = Math.max(t, Math.pow(1 - d, 1.8));
        }
        return clamp01(t);
      };
    }
  }
}

// ─── Gradient mapping ─────────────────────────────────────────────────────
// Paint a scalar field through a ramp of palette stops, producing a color
// the quantizer can snap back to the same palette.

/**
 * Paint a scalar field through a ramp of palette stops, producing a color
 * the quantizer can snap back to the same palette. `palette` resolves the
 * stop keys to concrete RGB — pass the theme's palette so the quantization
 * targets and the gradient share the same color space (a pattern built for
 * the dark theme must not blend against light-theme RGB values).
 */
export function sampleGradient(t: number, stops: PaletteKey[], palette: Swatch[] = SWATCHES): Rgb {
  const n = stops.length;
  if (n === 0) return palette[0].rgb;
  const s = clamp01(t) * (n - 1);
  const i0 = Math.min(Math.floor(s), n - 1);
  const i1 = Math.min(i0 + 1, n - 1);
  const frac = s - i0;
  const a = palette.find((sw) => sw.key === stops[i0])?.rgb ?? palette[0].rgb;
  const b = palette.find((sw) => sw.key === stops[i1])?.rgb ?? palette[0].rgb;
  return i0 === i1 ? a : mixRgb(a, b, frac);
}

// ─── Ordered dithering (Bayer 4×4) ────────────────────────────────────────
// Standard threshold matrix; the +0.5 keeps thresholds strictly in (0,1).

const BAYER4 = [
  0, 8, 2, 10,
  12, 4, 14, 6,
  3, 11, 1, 9,
  15, 7, 13, 5,
];

export function bayerThreshold(x: number, y: number): number {
  return (BAYER4[((y & 3) << 2) | (x & 3)] + 0.5) / 16;
}

/** The two closest palette swatches to a color (indices into `palette`). */
export function nearestSwatches(rgb: Rgb, palette: Swatch[]): [number, number] {
  let i0 = 0;
  let d0 = Infinity;
  let i1 = 1;
  let d1 = Infinity;
  for (let i = 0; i < palette.length; i++) {
    const d = dist(rgb, palette[i].rgb);
    if (d < d0) {
      d1 = d0;
      i1 = i0;
      d0 = d;
      i0 = i;
    } else if (d < d1) {
      d1 = d;
      i1 = i;
    }
  }
  return [i0, i1];
}

/**
 * Ordered-dither quantization: given a source color and a cell coordinate,
 * return a palette swatch. The residual distance between the two nearest
 * swatches is traded against the Bayer threshold, producing the graduations.
 */
export function orderedQuantize(rgb: Rgb, x: number, y: number, palette: Swatch[]): PaletteKey {
  const [i0, i1] = nearestSwatches(rgb, palette);
  const d0 = Math.sqrt(dist(rgb, palette[i0].rgb));
  const d1 = Math.sqrt(dist(rgb, palette[i1].rgb));
  const proximity = d1 / (d0 + d1); // 1 ≈ identical to c0
  const t = bayerThreshold(x, y);
  return proximity >= t ? palette[i0].key : palette[i1].key;
}

// ─── Grid rendering ───────────────────────────────────────────────────────

export interface DitherOptions {
  cols: number;
  rows: number;
  field: FieldName;
  /** Palette stops the scalar field is painted through, in order. */
  stops: PaletteKey[];
  /** Quantization palette; defaults to the (light) `SWATCHES`. */
  palette?: Swatch[];
  seed: string;
  /**
   * Fade the field toward the `bg` end near the tile rim (0 = off, 1 = fade
   * across the whole half-width). ~0.35–0.45 yields a soft 1/5–1/4 margin
   * of background around every tile, so the pattern dissolves into the page
   * instead of ending in a hard slab. Deterministic and baked into the
   * cells — no CSS mask involved.
   */
  edgeFade?: number;
}

export interface Run {
  x: number;
  w: number;
  key: PaletteKey;
}

/**
 * Dither a field onto a `cols × rows` grid. Consecutive same-color cells on
 * a row are merged into single horizontal runs so the emitted markup stays
 * small.
 */
export function ditherRuns(opts: DitherOptions): Run[][] {
  const { cols, rows, field, stops, seed, palette = SWATCHES, edgeFade = 0 } = opts;
  const f = makeField(field, seed);
  const out: Run[][] = [];
  for (let y = 0; y < rows; y++) {
    const ry = (y + 0.5) / rows;
    const line: Run[] = [];
    let cur: PaletteKey | null = null;
    for (let x = 0; x < cols; x++) {
      const rx = (x + 0.5) / cols;
      let t = f(rx, ry);
      if (edgeFade > 0) {
        // Normalized distance to the nearest edge (0 at the border →
        // 0.5 at the centre); scale t down near the rim so those cells
        // quantize toward `bg` and the tile merges with the page.
        const e = Math.min(rx, 1 - rx, ry, 1 - ry);
        t *= clamp01(e / (0.5 * edgeFade));
      }
      const rgb = sampleGradient(t, stops, palette);
      const key = orderedQuantize(rgb, x, y, palette);
      if (key === cur) {
        line[line.length - 1].w += 1;
      } else {
        line.push({ x, w: 1, key });
        cur = key;
      }
    }
    out.push(line);
  }
  return out;
}

/**
 * Emit the inner markup for a run grid as closed `<path>` segments, grouped
 * one path per palette color. `skipBg` drops runs that repeat the base
 * `var(--bg)` fill — they are invisible over the background rect. Segment
 * syntax `M x y h w v1 h-w z` draws a 1-unit-tall filled bar.
 */
export function runsMarkup(runs: Run[][], opts?: { skipBg?: boolean }): string {
  const skipBg = opts?.skipBg ?? false;
  const paths = new Map<PaletteKey, string[]>();
  for (let y = 0; y < runs.length; y++) {
    for (const run of runs[y]) {
      if (skipBg && run.key === 'bg') continue;
      let segs = paths.get(run.key);
      if (!segs) {
        segs = [];
        paths.set(run.key, segs);
      }
      segs.push(`M${run.x} ${y}h${run.w}v1h${-run.w}z`);
    }
  }
  let s = '';
  for (const [key, segs] of paths) {
    s += `<path class="d-${key}" d="${segs.join('')}"/>`;
  }
  return s;
}

/** Cell count of a run grid (useful for estimating markup weight). */
export function runCellCount(runs: Run[][]): number {
  return runs.reduce((acc, line) => acc + line.length, 0);
}