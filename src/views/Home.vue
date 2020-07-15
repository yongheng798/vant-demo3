<!--
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-15 14:20:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\Home.vue
-->
<template>
  <div class="home">
    <van-skeleton title :row="3" :loading="loading">
      <img alt="Vue logo" src="../assets/logo.png">
    </van-skeleton>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Skeleton } from 'vant'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    [Skeleton.name]: Skeleton
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false
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
