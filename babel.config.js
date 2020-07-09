/*
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-09 16:43:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', '@babel/preset-env'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining'
  ]
}
