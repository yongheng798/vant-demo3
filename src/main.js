/*
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-15 15:48:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'lib-flexible/flexible' // rem单位转换，目前采用vw单位
import './assets/css/global.less'
// import './until/initF2' // 通过require按需引入，开发中需要按需引入
import './until/initF2Import' // 通过E66 import export按需引入，开发中需要按需引入
// const F2 = require('@antv/f2/lib/index-all') // 全局引入f2，demo目前全局引用
// Vue.prototype.$F2 = F2
// 打印全局配置，查看默认值
// console.log(F2.Global)
// import Vant from 'vant' 全局引入vant，目前采用按需引入方式
// import 'vant/lib/index.css'
// import 'vant/lib/index.less'
// Vue.use(Vant)

// 移动端vconsole
// import Vconsole from 'vconsole' 移动端console
// new Vconsole()

// 路由进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 路由动画
Vue.prototype.transitionName = 'slide-left'

// 前进
Vue.prototype.push = (params) => {
  const { query: { from }} = params
  if (!params) {
    console.error('路由参数错误')
  }
  if (from) {
    Vue.prototype.transitionName = 'slide-right'
  } else {
    Vue.prototype.transitionName = 'slide-left'
  }
  router.push(params)
}

// 后退
Vue.prototype.goBack = (n = -1) => {
  Vue.prototype.transitionName = 'slide-right'

  const path = router.currentRoute.path
  if (path.includes('home')) {
    router.push({ path: '/' })
  } else {
    router.go(n)
  }
}

// 路由进度条
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
