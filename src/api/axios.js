/*
 * @Author: your name
 * @Date: 2020-07-15 16:54:32
 * @LastEditTime: 2020-07-15 17:00:09
 * @LastEditors: Please set LastEditors
 * @Description: axios请求接口封装
 * @FilePath: \vant-demo3\src\api\axios.js
 */
import axios from 'axios'
import router from '../router/index'
import { vtoast } from '../until/toast'

const token = ''

axios.defaults.withCredentials = false
axios.defaults.headers.common['token'] = token
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'// 配置请求头

// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function(config) {
  const token = window.localStorage.getItem('token')
  if (token) {
    // 将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.token = token
    // 也可以这种写法
    // config.headers['token'] = token;
  }
  return config
}, function(error) {
  vtoast.fail('请求超时')
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function(response) {
  if (response.data && response.data.code) {
    if (response.data.message === 'token失效' || response.data.message === '请求头中没有token') {
      // 未登录
      vtoast.fail('登录信息已失效，请重新登录')
      router.push('/login')
    }
    if (parseInt(response.data.code) === -1) {
      vtoast.fail('请求失败')
    }
  }
  return response
}, function(error) {
  vtoast.fail('服务器连接失败')
  return Promise.reject(error)
})

const base = ''

// 通用方法
export const POST = (url, params) => {
  const getTimestamp = new Date().getTime()
  return axios.post(`${base}${url}?timer=${getTimestamp}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  const getTimestamp = new Date().getTime()
  return axios.get(`${base}${url}?timer=${getTimestamp}`, { params: params }).then(res => res.data)
}

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, { params: params }).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}
