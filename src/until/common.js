/*
 * @Author: your name
 * @Date: 2020-07-26 09:43:42
 * @LastEditTime: 2020-08-05 10:25:28
 * @LastEditors: chenpinfu~陈品富
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\until\common.js
 */
/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
  const delay = t || 500
  let timer
  return function() {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}
export const debounce2 = (fu, wait) => {
  const delay = wait || 500
  let timer
  return function() {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fu.apply(this, args)
    }, delay)
  }
}

/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
  let last
  let timer
  const interval = t || 500
  return function() {
    const args = arguments
    const now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

/**
 * @name: 防抖节流、时间戳版本
 * @test: test font
 * @msg:  // e.g. 节流 - 时间戳 + 定时器
 * @param {type}
 * @return:
 */
export const throttleTimes = (func, delay) => {
  let lastTime, timeout
  return function() {
    const context = this
    const args = arguments
    const nowTime = +new Date()
    if (lastTime && nowTime < lastTime + delay) {
      timeout && clearTimeout(timeout)
      timeout = setTimeout(function() {
        lastTime = nowTime
        func.apply(context, args)
      }, delay)
    } else {
      lastTime = nowTime
      func.apply(context, args)
    }
  }
}

