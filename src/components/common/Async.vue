<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-04 09:29:40
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-04 16:11:23
-->
<template>
  <div class="container-wrap">
    <h3>Async异步方法</h3>
  </div>
</template>

<script>
export default {
  name: 'Async',
  data() {
    return {}
  },
  methods: {
    testFun() {
      // 函数声明
      async function foo() {
        console.log('hello,函数声明')
      }
      foo()
      // 函数表达式
      const foo2 = async function() {
        console.log('函数表达式')
      }
      foo2

      // 对象的方法
      const obj = { async foo3() {
        console.log('对象方法')
      } }
      obj.foo3().then()
    }
  }
}
</script>
