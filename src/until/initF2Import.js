/*
 * @Author: your name
 * @Date: 2020-07-14 10:45:02
 * @LastEditTime: 2020-07-14 11:12:33
 * @LastEditors: Please set LastEditors
 * @Description: F2的按需引入，所有引入都建议通过f2目录下的lib引入,ES6的import引入方式，目前所有需要引入的都在里面，官网的demo另外一个文件
 * @FilePath: \vant-demo3\src\until\initF2Import.js
 */

import Vue from 'vue'

import * as F2 from '@antv/f2/lib/core'
// import { Global, Chart, Shape, G, Util, Helper, track } from '@antv/f2/lib/core'

import '@antv/f2/lib/geom/'
import '@antv/f2/lib/geom/adjust/'

import '@antv/f2/lib/coord/polar' // polar coordinate
import '@antv/f2/lib/component/axis/circle' // the axis for polar coordinate

import '@antv/f2/lib/scale/time-cat' // timeCat scale

import '@antv/f2/lib/component/guide' // guide components

// import Animate from '@antv/f2/lib/animation/animate'
import '@antv/f2/lib/interaction'
// import Interaction from '@antv/f2/lib/interaction/base'

// 插件引入
import * as Tooltip from '@antv/f2/lib/plugin/tooltip'
import * as Guide from '@antv/f2/lib/plugin/guide'
import * as Legend from '@antv/f2/lib/plugin/legend'
import * as Animation from '@antv/f2/lib/animation/detail'
import * as ScrollBar from '@antv/f2/lib/plugin/scroll-bar'
import * as PieLabel from '@antv/f2/lib/plugin/pie-label'
import * as intervalLabel from '@antv/f2/lib/plugin/interval-label'

// register plugins
F2.Chart.plugins.register([Tooltip, Legend, Guide, Animation, ScrollBar, PieLabel, intervalLabel])

// export default {
//   Global,
//   Chart,
//   Shape,
//   G,
//   Util,
//   Helper,
//   track,
//   Interaction,
//   Animate
// }

Vue.prototype.$F2 = F2
// 打印全局配置，查看默认值
console.log(F2.Global)
