import { defineConfig } from 'vite';
import { minify } from 'html-minifier-terser';

const minificarHtml = {
  name: 'minificar-html',
  apply: 'build',
  enforce: 'post',
  async transformIndexHtml(html) {
    return await minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true
    });
  }
};

export default defineConfig({
  base: './',
  plugins: [minificarHtml],
  build: {
    minify: true,
    cssMinify: true
  }
});
