const path = require('path')

const resolve = dir => path.join(__dirname, dir)

// 根据环境设置url
const BASE_URL = process.env.NODE_ENV === 'prduction' ? '/wee-study/' : '/'

module.exports = {
  // 取消每次保存都检测
  lintOnSave: false,
  publicPath: BASE_URL,
  // webpack链式调用方法
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias
      //  表示src用  @ 代替
      .set('@', resolve('src'))
      //  表示src/coponents用  _c代替
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件，减小打包体积，加快打包速度
  productionSourceMap: false,
  // 跨域配置，将任何没有匹配到静态文件的的请求都代理到http://localhost:4000
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
