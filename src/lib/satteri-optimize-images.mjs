/**
 * Sätteri hast plugin: route raw-HTML `<img src="/images/...">` in markdown
 * posts through Astro's content-asset pipeline, so post images get the same
 * optimized treatment as `<Image />` (WebP re-encode, real width/height,
 * lazy loading, hashed asset URLs).
 *
 * How it works (mirrors Astro's own markdown-image handling):
 *   - Markdown image syntax (`![alt](path)`) becomes `element` nodes and is
 *     handled by Astro's built-in collect/marker plugins.
 *   - Raw-HTML `<img>` tags arrive as `raw` STRING nodes which Astro never
 *     touches. This plugin rewrites those strings:
 *       1. registers the asset in `ctx.data.astro.localImagePaths` so the
 *          data store imports it (`astro:asset-imports`) and
 *       2. replaces the tag's `src` with a `__ASTRO_IMAGE_` marker carrying
 *          the image options (the runtime `updateImageReferencesInBody`
 *          swaps the marker for the final optimized attributes).
 *   - Author classes/alt/title stay as real attributes on the tag; the anchor
 *     wrappers that used to link to the old `/images/...` files are unwrapped
 *     (those files no longer exist in public/).
 *
 * Only images that actually exist under `src/assets/images/` are rewritten —
 * remote URLs, illustrative `image.jpg`, and the long-missing `menu.gif`
 * (animated) pass through untouched.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const IMAGES_DIR = path.join(process.cwd(), 'src', 'assets', 'images');
const MAX_WIDTH = 1024;
const QUALITY = 80;

function posix(rel) {
  return rel.split(path.sep).join('/');
}

function parseAttrs(tag) {
  const attrs = [];
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*("([^"]*)"|'([^']*)'|[^\s"'=<>`]+)/g;
  let m;
  while ((m = re.exec(tag))) {
    attrs.push({ name: m[1], value: (m[3] ?? m[4] ?? m[2]).replace(/&amp;/g, '&') });
  }
  return attrs;
}

function attrValue(attrs, name) {
  const a = attrs.find((x) => x.name.toLowerCase() === name);
  return a ? a.value : undefined;
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/** Resolve `/images/X` to the asset file under src/assets/images. */
function assetFileFor(src) {
  if (typeof src !== 'string' || !src.startsWith('/images/')) return null;
  const ext = path.extname(src).toLowerCase();
  if (!IMG_EXT.has(ext)) return null;
  return path.join(IMAGES_DIR, src.slice('/images/'.length));
}

/**
 * Post-relative asset path (same shape Astro's markdown-image collection
 * uses, e.g. `../../assets/images/x.jpg`), or null when the file is missing
 * or unreadable.
 */
async function relativePathFor(file, mdFileURL) {
  let meta;
  try {
    meta = await sharp(file).metadata();
  } catch {
    return null;
  }
  if (!meta.width || !meta.height) return null;
  const mdDir = path.dirname(mdFileURL ? fileURLToPath(mdFileURL) : process.cwd());
  return posix(path.relative(mdDir, file));
}

/** Rewrite an `<img ...>` tag into a `__ASTRO_IMAGE_` marker form, or null. */
async function rewriteImgTag(tag, mdFileURL, index) {
  const attrs = parseAttrs(tag);
  const file = assetFileFor(attrValue(attrs, 'src'));
  if (!file) return null;
  const rel = await relativePathFor(file, mdFileURL);
  if (!rel) return null;

  const authored = parseInt(attrValue(attrs, 'width') ?? '', 10);
  const props = Number.isFinite(authored) && authored > 0
    ? { width: Math.min(MAX_WIDTH, authored * 2), quality: QUALITY, formats: ['webp'] }
    : { quality: QUALITY, formats: ['webp'] };
  const marker = JSON.stringify({ src: rel, index, ...props });

  const keep = attrs.filter(
    (a) => !['src', 'width', 'height', 'loading', 'decoding'].includes(a.name.toLowerCase())
  );
  const parts = ['<img'];
  for (const a of keep) parts.push(`${a.name}="${escapeAttr(a.value)}"`);
  parts.push(`__ASTRO_IMAGE_="${marker.replace(/"/g, '&quot;')}"`);
  const selfClose = /\/\s*>$/.test(tag);
  return { html: parts.join(' ') + (selfClose ? ' />' : '>'), rel };
}

export default {
  name: 'optimize-post-images',
  options: {},
  raw: async (node, ctx) => {
    const value = typeof node.value === 'string' ? node.value : '';
    if (!value.includes('/images/')) return;
    if (!ctx.data?.astro) return;

    const imgMatches = [...value.matchAll(/<img\b[^>]*>/gi)];
    const anchorMatches = [...value.matchAll(/<a\b[^>]*>/gi)];

    // 1. Rewrite each img tag; remember which got migrated and their span.
    const edits = [];
    const migrated = [];
    let docIndex = 0;
    for (const m of imgMatches) {
      const result = await rewriteImgTag(m[0], ctx.fileURL, docIndex);
      if (!result) continue;
      docIndex++;
      edits.push({ start: m.index, end: m.index + m[0].length, replacement: result.html });
      migrated.push({ start: m.index, end: m.index + m[0].length });
      ctx.data.astro.localImagePaths.add(result.rel);
    }

    // 2. Unwrap anchors that linked to a migrated full-size file (no longer
    //    present under public/).
    const closingAnchors = [...value.matchAll(/<\/a>/gi)];
    for (const a of anchorMatches) {
      const href = attrValue(parseAttrs(a[0]), 'href');
      if (!assetFileFor(href)) continue;
      const wrapping = migrated.some(
        (img) => img.start >= a.index + a[0].length
      );
      if (!wrapping) continue;
      const closing = closingAnchors.find((c) => c.index > a.index);
      if (!closing) continue;
      edits.push({ start: a.index, end: a.index + a[0].length, replacement: '' });
      edits.push({ start: closing.index, end: closing.index + closing[0].length, replacement: '' });
    }

    if (edits.length === 0) return;

    // 3. Apply edits back-to-front so earlier indices stay valid.
    edits.sort((x, y) => y.start - x.start);
    let out = value;
    for (const e of edits) {
      out = out.slice(0, e.start) + e.replacement + out.slice(e.end);
    }
    if (out === value) return;
    return { type: 'raw', value: out };
  },
};