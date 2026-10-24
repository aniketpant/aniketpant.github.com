// Node module hooks that point @astrojs/markdown-satteri at a stub.
// Load with: node --import ./scripts/preview/loader.mjs ...
// Keep this file small: it must run before Astro is imported.
import { registerHooks } from 'node:module';

const stub = new URL('./satteri-stub.mjs', import.meta.url).href;

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === '@astrojs/markdown-satteri') {
      return { url: stub, shortCircuit: true };
    }
    return nextResolve(specifier, context);
  },
});
