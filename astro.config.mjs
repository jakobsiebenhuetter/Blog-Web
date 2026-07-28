// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({

  integrations: [svelte({emitCss: false})],


  
  devToolbar: {
      enabled: false
  },

  site: 'https://jakobsiebenhuetter.github.io',
  base: '/Blog-Web',
});