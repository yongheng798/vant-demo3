/*
 * @Author: your name
 * @Date: 2020-07-07 20:38:01
 * @LastEditTime: 2020-07-15 12:41:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/canvas',
    name: 'canvasIndex',
    component: () => import(/* webpackChunkName: "about" */ '../views/canvas/index.vue')
  },
  {
    path: '/vant',
    name: 'vantIndex',
    component: () => import(/* webpackChunkName: "about" */ '../views/vant/index.vue')
  },
  {
    path: '/form',
    name: 'FormMix',
    component: () => import(/* webpackChunkName: "about" */ '../views/vant/form/formMix.vue')
  },
  {
    path: '/antvF2',
    name: 'antvF2',
    component: () => import(/* webpackChunkName: "about" */ '../views/antv/indexF2.vue')
  },
  {
    path: '/antvF2Test',
    name: 'antvF2Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/antv/f2/indexAntVF2Test.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
