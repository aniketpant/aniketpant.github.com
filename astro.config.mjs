import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import optimizePostImages from './src/lib/satteri-optimize-images.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aniketpant.com',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  },
  image: {
    // Sharpen the default processing pipeline and allow the About page to
    // optimize Gravatar through <Image> (fetched at build time).
    service: { entrypoint: 'astro/assets/services/sharp' },
    remotePatterns: [{ protocol: 'https', hostname: 'www.gravatar.com' }],
  },
  markdown: {
    // Sätteri (Astro 7's default Markdown processor). We add a hast plugin that
    // runs raw-HTML `<img src="/images/...">` from posts through astro:assets.
    processor: satteri({ hastPlugins: [optimizePostImages] }),
    shikiConfig: {
      // Emit CSS variable references instead of baking one fixed dark theme,
      // so code blocks follow the site's light/dark palette (see --astro-code-* in
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
