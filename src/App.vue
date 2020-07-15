<!--
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-15 08:58:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/canvas">Canvas</router-link> |
      <router-link to="/antvF2">AntV F2</router-link>
      <!-- <router-link to="/vant">Vant</router-link> | -->
      <!-- <router-link to="/form">Vant Form</router-link> -->
      <router-link to="/antvF2Test">AntV F2 Test</router-link>
    </div>
    <transition :name="transitionName">
      <keep-alive :include="keepAlivePages">
        <router-view />
      </keep-alive>
    </transition>
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
        antvF2: true
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
