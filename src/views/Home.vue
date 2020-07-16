<!--
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-16 14:24:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\Home.vue
-->
<template>
  <div class="home">
    <AwesomeSwiper />
    <van-skeleton title :row="3" :loading="loading">
      <img alt="Vue logo" src="../assets/logo.png">
    </van-skeleton>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import AwesomeSwiper from '@/components/common/AwesomeSwiper'
// import HelloWorld from '@/components/HelloWorld.vue'
import { Skeleton } from 'vant'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    [Skeleton.name]: Skeleton,
    AwesomeSwiper
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
  margin: auto;
  img{
    max-width: 100%;
  }
}
</style>
