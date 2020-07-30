/*
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-30 08:46:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\babel.config.js
 */
let transformRemoveConsolePlugin = []
if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ['transform-remove-console']
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', '@babel/preset-env'
  ],
  plugins: [
    ...transformRemoveConsolePlugin,
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining'
  ]
}
