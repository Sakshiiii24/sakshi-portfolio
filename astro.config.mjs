// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://sakshiiii24.github.io',

  vite: {
    plugins: [tailwind()],
  },

  adapter: vercel(),
});