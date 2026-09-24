import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aniketpant.com',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  },
  markdown: {
    shikiConfig: {
      // Emit CSS variable references instead of baking one fixed dark theme,
      // so code blocks follow the site's light/dark palette (see --shiki-* in
      // global.css). "dark on dark" code blocks in light mode were caused by
      // the old default github-dark theme being hardcoded inline.
      theme: 'css-variables',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
