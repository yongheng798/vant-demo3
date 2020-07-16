/*
 * @Author: your name
 * @Date: 2020-07-15 17:13:49
 * @LastEditTime: 2020-07-15 17:31:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\common\api.js
 */
import axios from 'axios'
// 网络请求的序列化
import qs from 'qs'
import _this from '../main'
import common from './common'
import host from './serviceUrl'

// 需要登陆的，都写到这里，否则就是不需要登陆的接口
const methodToken = [
  'user.info',
  'user.editinfo'
]

const apiUrl = ''
const config = ''
// 接口token验证
const post = (method, data, callback) => {
  // 如果是需要登陆的，增加token
  if (methodToken.indexOf(method) >= 0) {
    const userToken = common.getStorage('user_token')
    if (!userToken) {
      common.jumpToLogin()
      return false
    } else {
      data.token = userToken
    }
  }
  data.method = method
  sendPost(apiUrl, qs.stringify(data), {}, callback)
}

// axios 发送请求统一处理
const sendPost = (url, data, callback) => {
  _this.$dialog.loading.open('加载中')
  axios.post(url, data, config).then(response => {
    _this.$dialog.loading.close()
    if (!response.data.status) {
      // 输出错误显示
      common.errorToBack(response.data.msg)
      if (response.data.data === 14007 || response.data.data === 14006) {
        // 用户未登录或者token过期 清空本地user_token
        common.removeStorage('user_token')
        // 跳转至登录
        common.jumpToLogin()
      }
    }
    callback(response.data)
  }).catch(err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求参数错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '跨域拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      _this.$dialog.loading.close()
      common.errorToBack(err.message)
    }
  })
}

// 获取店铺配置
export const shopConfig = () => axios.get(host + '/api/common/jshopconf').then(response => response.data)

// 用户注册
export const reg = (data, callback) => post('user.reg', data, callback)

// 用户登录
export const login = (data, callback) => post('user.login', data, callback)

