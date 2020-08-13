<!--
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-08-07 08:38:57
 * @LastEditors: chenpinfu~陈品富
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/canvas">Canvas</router-link> |
      <router-link to="/antvF2">AntV F2</router-link>
      | <router-link to="/vant">Vant</router-link>
      | <router-link to="/form">Vant Form</router-link>
      <!-- | <router-link to="/swiper">swiper</router-link> -->
      <!-- <router-link to="/antvF2Test">AntV F2 Test</router-link> -->
    </div>
    <div class="scroll-container-wrap">
      <transition :name="transitionName">
        <!-- include - 字符串或正则表达式，只有名称匹配的组件会被缓存
exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存
include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、正则表达式、数组。当使用正则或者是数组时，要记得使用v-bind 。 -->
        <keep-alive :include="keepAlivePages">
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      // 路由缓存状态
      keepAlivePagesConfig: {
        home: true,
        form: true,
        antvF2: true,
        antvF2Test: true
      },
      transitionName: 'slide-left'
    }
  },
  computed: {
    // 页面缓存对象
    keepAlivePages() {
      const keepAliveArr = []
      Object.keys(this.keepAlivePagesConfig).forEach((key) => {
        if (this.keepAlivePagesConfig[key]) {
          keepAliveArr.push(key)
        }
      })
      console.log('keepAliveArr=====', keepAliveArr)
      return keepAliveArr
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  beforeCreate() {
    Vue.prototype.transitionName = 'slide-right'
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 20px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.scroll-container-wrap{
  position: relative;
  width: 100%;
  height: calc(100%-30px);
  overflow-x: hidden;
  overflow-y: auto;
}
// 路由动画
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
