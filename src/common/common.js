/*
 * @Author: your name
 * @Date: 2020-07-15 17:13:25
 * @LastEditTime: 2020-07-15 17:24:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\common\common.js
 */
// 导入main.js这里需要用到路由
import _this from '../main'

// 设置localStorage
function setStorage(name, content) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

// 获取localStorage
function getStorage(name) {
  if (!name) return
  return window.localStorage.getItem(name)
}

// 删除localStorage
function removeStorage(name) {
  if (!name) return
  window.localStorage.removeItem(name)
}

// 把obj对象里的值覆盖到newobj里面
function deepCopy(newobj, obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  for (const attr in obj) {
    let a = {}
    if (newobj[attr]) {
      a = newobj[attr]
    }
    newobj[attr] = deepCopy(a, obj[attr])
  }
  return newobj
}

// 跳转到登陆页面
function jumpToLogin() {
  _this.$router.push({
    path: '/login',
    query: {
      redirect: _this.$route.fullPath
    }
  })
}

// 当出错的时候，显示错误信息，并且跳转
function errorToBack(msg = '出错了，请重试', time = 1500) {
  _this.$dialog.toast({
    mes: msg,
    timeout: time
  })
}
// 操作成功后，的提示信息
// function successToShow(msg = '保存成功', callback = function() {}) {
//   wx.showToast({
//     title: msg,
//     icon: 'success',
//     duration: 2000
//   })
//   setTimeout(function() {
//     callback()
//   }, 1500)
// }

// 时间戳转时间格式
function timeToDate(date) {
  const dateTime = new Date(date * 1000) // 如果date为13位不需要乘1000
  const Y = dateTime.getFullYear() + '-'
  const M = (dateTime.getMonth() + 1 < 10 ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1) + '-'
  const D = (dateTime.getDate() < 10 ? '0' + (dateTime.getDate()) : dateTime.getDate()) + ' '
  const h = (dateTime.getHours() < 10 ? '0' + dateTime.getHours() : dateTime.getHours()) + ':'
  const m = (dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes()) + ':'
  const s = (dateTime.getSeconds() < 10 ? '0' + dateTime.getSeconds() : dateTime.getSeconds())
  return Y + M + D + h + m + s
}

// 货币格式化
function formatMoney(number, places, symbol, thousand, decimal) {
  number = number || 0
  places = !isNaN(places = Math.abs(places)) ? places : 2
  symbol = symbol !== undefined ? symbol : '￥'
  thousand = thousand || ','
  decimal = decimal || '.'
  const negative = number < 0 ? '-' : ''
  const i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + ''
  const j = (i.length) > 3 ? i.length % 3 : 0
  return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}

// 节流函数，防止多次点击调用接口
function throttle(fn, context, delay) {
  clearTimeout(fn.timeoutId)
  fn.timeoutId = setTimeout(function() {
    fn.call(context)
  }, delay)
}

export default {
  setStorage: setStorage,
  getStorage: getStorage,
  removeStorage: removeStorage,
  deepCopy: deepCopy,
  jumpToLogin: jumpToLogin,
  timeToDate: timeToDate,
  formatMoney: formatMoney,
  errorToBack: errorToBack,
  // successToShow: successToShow,
  throttle: throttle
}
