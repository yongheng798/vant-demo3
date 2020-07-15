/*
 * @Author: your name
 * @Date: 2020-07-15 15:10:26
 * @LastEditTime: 2020-07-15 15:20:47
 * @LastEditors: Please set LastEditors
 * @Description: 提示框统一封装
 * @FilePath: \vant-demo3\src\until\toast.js
 */
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)

export function vtoast(message, options) {
  const { type, duration, position } = options || {}
  Toast.setDefaultOptions({
    position: position || 'bottom',
    duration: duration || 2000
  })
  if (type) {
    Toast[`${type}`]({
      message
    })
  } else {
    Toast({
      message
    })
  }
  const clearToast = () => {
    Toast.clear()
  }
  return { clearToast }
}
