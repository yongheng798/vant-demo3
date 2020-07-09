/*
 * @Author: your name
 * @Date: 2020-07-08 18:46:39
 * @LastEditTime: 2020-07-09 16:53:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\.postcssr.js
 */
// postcss.config.js文件
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-import': {}, // 用于@import导入css文件
    'postcss-url': {}, // 路径引入css文件或node_modules文件
    'postcss-aspect-ratio-mini': {}, // 用来处理元素容器宽高比
    'postcss-write-svg': { utf8: false }, // 用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理。
    // 'postcss-cssnext': {
    //   features:{
    //     customProperties:{
    //       warnings:false
    //     }
    //   }
    // }, // 该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理。
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 1334, // 视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      propList: ['*'], // 能转化为vw的属性列表
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      fontViewportUnit: 'vw', // 字体使用的视口单位
      selectorBlackList: ['.ignore-', '.hairlines', 'van'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true, // 是否直接更换属性值，而不添加备用属性
      exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 1134 // 横屏时使用的视口宽度
    },
    'postcss-viewport-units': {},
    'cssnano': {
      preset: 'advanced',
      autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
      'postcss-zindex': false
    }
  }
}
