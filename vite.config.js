import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: './',
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'gifts.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});
