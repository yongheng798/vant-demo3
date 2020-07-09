<!--
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-09 19:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 75%;
  margin: auto;
  img{
    max-width: 100%;
  }
}
</style>
