/*
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-09 19:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'lib-flexible/flexible' // rem单位转换
import './assets/css/global.less'
// import './until/initF2'
const F2 = require('@antv/f2/lib/index-all') // 全局引入f2
Vue.prototype.$F2 = F2

// import Vant from 'vant' 全局引入vant，目前采用按需引入方式
// import 'vant/lib/index.css'
// import 'vant/lib/index.less'
// Vue.use(Vant)
// import Vconsole from 'vconsole' 移动端console
// new Vconsole()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
