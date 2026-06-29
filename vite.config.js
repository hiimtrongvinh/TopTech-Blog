import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/TopTech-Blog/' : '/', // Correct path format for GitHub Pages (starts and ends with slash)
});
