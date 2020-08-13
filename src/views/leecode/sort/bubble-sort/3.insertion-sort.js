/*
 * @Descripttion: 插入排序
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-07 10:09:29
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-07 10:18:13
 */
export function insertionSort(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)
  for (let i = 1, len = newArr.length; i < len; i++) {
    const temp = newArr[i]
    let preIndex = i - 1

    while (newArr[preIndex] > temp) {
      newArr[preIndex + 1] = newArr[preIndex]
      preIndex -= 1
    }
    newArr[preIndex + 1] = temp
  }

  return newArr
}

// 插入排序
export function insertionSort2(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)
  for (let i = 1, len = newArr.length; i < len; i++) {
    const temp = newArr[i]
    const insertIndex = binarySearch(newArr, i - 1, newArr[i])

    for (let preIndex = i - 1; preIndex >= insertIndex; preIndex--) {
      newArr[preIndex + 1] = newArr[preIndex]
    }
    newArr[insertIndex] = temp
  }

  return newArr
}

function binarySearch(arr, maxIndex, value) {
  let min = 0
  let max = maxIndex

  while (min <= max) {
    const mid = Math.floor((min + max) / 2)

    if (arr[mid] <= value) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }

  return min
}
