/*
 * @Descripttion: 基本排序功能实现
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-06 10:06:48
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-06 16:33:58
 */
// A/B位置对调
import { swap } from '@/views/leecode/sort/swap'

// 基本排序 函数声明
export function bubbleSort(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return

  const newArr = arr.slice(0)

  for (let i = newArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        swap(newArr, j, j + 1)
      }
    }
  }

  return newArr
}
//
export function bubbleSort2(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return

  const newArr = arr.slice(0)

  let i = newArr.length - 1
  while (i > 0) {
    let pos = 0

    for (let j = 0; j < i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        pos = j
        swap(newArr, j, j + 1)
      }
    }
    i = pos
  }

  return newArr
}

// 方式3，左右两边同时对比

export function bubbleSort3(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)
  let start = 0
  let end = newArr.length - 1

  while (start < end) {
    for (let i = start; i < end; i++) {
      swap(newArr, i, i + 1)
    }
    end -= 1
    for (let i = end; i > start; i--) {
      if (newArr[i - 1] > arr[i]) {
        swap(newArr, i - 1, i)
      }
    }
    start += 1
  }

  return newArr
}

// 继续优化 // 函数表达式
export function bubbleSort4(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)

  let start = 0
  let end = newArr.length - 1

  while (start < end) {
    let endPos = 0
    let startPos = 0

    for (let i = start; i < end; i++) {
      if (newArr[i] > newArr[i + 1]) {
        endPos = i
        swap(newArr, i, i + 1)
      }
    }
    end = endPos
    for (let i = end; i > start; i--) {
      if (newArr[i - 1] > newArr[i]) {
        startPos = i
        swap(newArr, i - 1, i)
      }
    }
    start = startPos
  }

  return newArr
}

// 传一个排序的函数进来
export function bubbleSort5(arr, compareFunc) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)

  for (let i = newArr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (compareFunc(newArr[j], newArr[j + 1]) > 0) {
        swap(newArr, j, j + 1)
      }
    }
  }

  return newArr
}

// test
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
// console.log(bubbleSort(arr))
// console.log(bubbleSort(arr, (a, b) => a - b))
// console.log(bubbleSort(arr, (a, b) => b - a))
