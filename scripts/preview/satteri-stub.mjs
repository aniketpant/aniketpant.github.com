// Stand-in for @astrojs/markdown-satteri, used only by the local preview.
//
// Astro's config schema imports `satteri` from that package when it loads, and
// the content loader calls its processor while it syncs the posts collection.
// The real package loads a native module that has no android-arm64 build, so
// the import throws before the preview config is even read.
//
// The five preview pages never render a post body, so this stub only has to
// keep the import and the content sync working. If a post page is opened
// anyway, Markdown becomes plain paragraphs: no headings, links, or images.
const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function satteri() {
  return {
    name: 'satteri-preview-stub',
    options: {},
    createRenderer() {
      return {
        async render(body = '') {
          const html = body
            .split(/\n{2,}/)
            .map((block) => block.trim())
            .filter(Boolean)
            .map((block) => `<p>${escapeHtml(block)}</p>`)
            .join('\n');
          return {
            code: html,
            metadata: { headings: [], localImagePaths: [], remoteImagePaths: [] },
          };
        },
      };
    },
  };
}

export function isSatteriProcessor(processor) {
  return processor?.name === 'satteri';
}
