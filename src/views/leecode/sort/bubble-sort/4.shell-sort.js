/*
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-07 10:30:31
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-07 10:31:15
 */
export function shellSort(arr) {
  if (!Array.isArray(arr) && !arr.length && !arr.length < 1) return
  const newArr = arr.slice(0)
  const len = newArr.length
  let gap = 1

  while (gap < len / 3) {
    gap = gap * 3 + 1
  }
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const temp = newArr[i]
      let preIndex = i - gap

      while (newArr[preIndex] > temp) {
        newArr[preIndex + gap] = newArr[preIndex]
        preIndex -= gap
      }
      newArr[preIndex + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }

  return newArr
}
