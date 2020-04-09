module.exports = (config, resolver) => {
  const cssRule = config.module.rule('css').test(/\.css$/);
  cssRule.use('style').loader('style-loader');
  cssRule.use('css').loader('css-loader');
};
