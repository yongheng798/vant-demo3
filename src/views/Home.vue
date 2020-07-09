<!--
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-08 16:28:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
