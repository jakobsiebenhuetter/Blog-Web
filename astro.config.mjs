// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  devToolbar: {
      enabled: false
  },

  site: 'https://jakobsiebenhuetter.github.io',
  base: '/Blog-Web',

  vite: {
    plugins: [tailwindcss()]
  }
});