/*
 * @Descripttion: 选择排序
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-06 15:40:29
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-07 08:35:07
 */
import { swap } from '@/views/leecode/sort/swap'

export function selectionSort(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)
  const len = newArr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (newArr[j] < newArr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(newArr, i, minIndex)
    }
  }

  return newArr
}

export function selectionSort2(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)
  const len = newArr.length

  for (let i = len - 1; i > 0; i--) {
    let maxIndex = i

    for (let j = i - 1; j >= 0; j--) {
      if (newArr[j] > newArr[maxIndex]) {
        maxIndex = j
      }
    }
    if (i !== maxIndex) {
      swap(newArr, i, maxIndex)
    }
  }

  return newArr
}
// test
// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
// console.log(selectionSort(arr))
