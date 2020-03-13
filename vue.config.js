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
}