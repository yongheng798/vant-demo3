/*
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-09 16:33:50
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
const F2 = require('@antv/f2/lib/index-all')
Vue.prototype.$F2 = F2
// import Vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
// Vue.use(Vant)
// import Vconsole from 'vconsole'
// new Vconsole()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
