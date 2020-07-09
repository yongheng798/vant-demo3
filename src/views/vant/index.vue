<!--
 * @Author: your name
 * @Date: 2020-07-07 20:44:33
 * @LastEditTime: 2020-07-09 16:54:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\vant\index.vue
-->
<template>
  <div class="containner">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 底部菜单 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" replace to="/vant">Vant</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20" replace to="/form">Form</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Toast } from 'vant'

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  components: {
    // NavBar,
    // Tabbar,
    // TabbarItem,
    // Swipe,
    // SwipeItem
    // Toast
  },
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
