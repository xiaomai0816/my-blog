//调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象
module.exports = {
  configureWebpack: {//该对象将会被 webpack-merge 合并入最终的 webpack 配置。
    resolve:{
      alias:{//配置别名，默认值@为src
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
  // dev:{
  //   proxyTable:{
  //     '/api': {
  //       target: 'http://localhost:8088', // 你接口的域名
  //       secure: false, // 如果是https接口，需要配置这个参数为true
  //       changeOrigin: true // 如果接口跨域，需要进行这个参数配置为true
  //     }
  //   }
  // }
}