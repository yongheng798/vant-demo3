/*
 * @Descripttion: 常用的代码片段
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-07-30 11:42:15
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-13 19:03:16
 */
/**
 * @name: all
 * @test: all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
 * @msg:
 * @param {type}
 * @return:
 */
export const all = (arr, fn = Boolean) => arr.every(fn)

// 2、allEqual 判断数组中的元素是否相等
export const allEqual = arr => arr.every(val => val === arr[0])
// demo
// allEqual([1, 2, 3, 4, 5, 6]); // false
// allEqual([1, 1, 1, 1]); // true

// 3、approximatelyEqual
// 此代码示例检查两个数字是否近似相等，差异值可以通过传参的形式进行设置
export const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon
// approximatelyEqual(Math.PI / 2.0, 1.5708); // true

// 4、arrayToCSV
// 此段代码将没有逗号或双引号的元素转换成带有逗号分隔符的字符串即CSV格式识别的形式。
export const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n')

// 5、arrayToHtmlList
// 此段代码将数组元素转换成<li>标记，并将此元素添加至给定的ID元素标记内。
// export const arrayToHtmlList = (arr, listID) =>
//   (el => (
//     (el = document.querySelector('#' + listID)),
//     (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
//   ))()

// 6、attempt
// 此段代码执行一个函数，将剩余的参数传回函数当参数，返回相应的结果，并能捕获异常。
export const attempt = (fn, ...args) => {
  try {
    return fn(...args)
  } catch (e) {
    return e instanceof Error ? e : new Error(e)
  }
}

// 7、average
// 此段代码返回两个或多个数的平均数。 average(...[1, 2, 3]); // 2
export const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length

// 8、averageBy
// 一个 map()函数和 reduce()函数结合的例子，此函数先通过 map() 函数将对象转换成数组，然后在调用reduce()函数进行累加，然后根据数组长度返回平均值。
export const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
arr.length

// 9、bifurcate
// 此函数包含两个参数，类型都为数组，依据第二个参数的真假条件，将一个参数的数组进行分组，条件为真的放入第一个数组，其它的放入第二个数组。这里运用了Array.prototype.reduce() 和 Array.prototype.push() 相结合的形式。
// export const bifurcate = (arr, filter) =>
//   arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])

// 11、bottomVisible
// 用于检测页面是否滚动到页面底部。
export const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
(document.documentElement.scrollHeight || document.documentElement.clientHeight)

// 12、byteSize
export const byteSize = str => new Blob([str]).size

// 13、capitalize
// 将字符串的首字母转成大写,这里主要运用到了ES6的展开语法在数组中的运用。
export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('')

// 14、capitalizeEveryWord
// 将一个句子中每个单词首字母转换成大写字母，这里中要运用了正则表达式进行替换。
export const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase())

// 15、castArray
// 此段代码将非数值的值转换成数组对象。
export const castArray = val => (Array.isArray(val) ? val : [val])

// 16、compact
// 将数组中移除值为 false 的内容。
export const compact = arr => arr.filter(Boolean)

// 17、countOccurrences
// 统计数组中某个值出现的次数
export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
