const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/farm-test/',
  // Опционально: генерировать 404.html для GitHub Pages (редирект на index.html)
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('copy').tap(args => {
        args[0].patterns.push({
          from: 'public/index.html',
          to: '404.html',
          toType: 'file'
        });
        return args;
      });
    }
  }
});
