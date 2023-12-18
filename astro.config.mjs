import { defineConfig } from 'astro/config';
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: 'https://r2leyser.github.io',
  markdown: {
    shikiConfig: {
      theme: 'poimandres'
    }
  },
  integrations: [markdoc()]
});
