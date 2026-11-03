import purgecss from '@fullhuman/postcss-purgecss';

const purgeCSSPlugin = purgecss.purgeCSSPlugin || purgecss;
const produccion = process.env.NODE_ENV === 'production';

export default {
  plugins: produccion
    ? [purgeCSSPlugin({ content: ['./index.html', './src/**/*.js'] })]
    : []
};
