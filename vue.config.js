module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 保存时自动更正
  lintOnSave: true,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    // 服务器地址
    // host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // http 代理配置
    proxy: {
      '/': {
        target: 'http://localhost:8181',
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
