// Local preview config for Android/Termux.
//
// The normal astro.config.mjs imports @astrojs/markdown-satteri, whose
// `satteri` package has no android-arm64 native binding, so the config fails
// to load before Astro starts. It also selects the sharp image service, which
// has no Android build.
//
// This config keeps the settings that affect layout and styling, and drops the
// two native pieces. Only the static project pages are meant to be previewed
// here; post rendering is not supported without the Markdown processor.
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// Astro imports the Markdown integration when its config schema loads, and
// Vite resolves that import for the dev server itself. Point it at a stub.
const satteriStub = fileURLToPath(new URL('./scripts/preview/satteri-stub.mjs', import.meta.url));

export default defineConfig({
  site: 'https://www.aniketpant.com',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  },
  image: {
    // No native image encoder on Android; keep imports working without it.
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: { alias: { '@astrojs/markdown-satteri': satteriStub } },
    ssr: { noExternal: ['@astrojs/markdown-satteri'] },
  },
});
