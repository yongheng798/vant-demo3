/*
 * @Author: your name
 * @Date: 2020-07-15 17:12:59
 * @LastEditTime: 2020-07-15 17:13:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\common\serviceUrl.js
 */
let host = ''

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  host = 'http://lvcai.xj128.com'
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境
  host = 'http://lvcai.xj128.com'
}
export default host
