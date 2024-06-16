import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  //root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'build'),
    rollupOptions: {
      input: resolve(__dirname, './index.html'),
  },
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    context: {
      username: 'Aaaa',
    }
  })],
});
