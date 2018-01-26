module.exports = (ctx) => ({
  plugins: {
    'postcss-nested': {},
    'postcss-import': { root: ctx.file.dirname },
    'postcss-cssnext': {},
    'postcss-url': {
      url: 'copy',
      useHash: true,
      assetsPath: 'assets'
    },
    'postcss-browser-reporter': {},
    'postcss-reporter': {}
  }
});