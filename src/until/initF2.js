/*
 * @Author: your name
 * @Date: 2020-07-03 09:07:52
 * @LastEditTime: 2020-07-14 10:45:56
 * @LastEditors: Please set LastEditors
 * @Description: F2的按需引入，所有引入都建议通过f2目录下的lib引入,本文件采用AMD方式引入，import引入方式在另外一个文件
 * @FilePath: \vue-antv-f2\src\utils\initF2.js
 */
import Vue from 'vue'

const F2 = require('@antv/f2/lib/core')
// 核心包 import { Global, Chart, Shape, G, Util, Helper, track } from './core';
require('@antv/f2/lib/geom/') // 加载全部图形
// gemo类型
// require('@antv/f2/lib/geom/line') // 只加载折线图
// require('@antv/f2/lib/geom/area') // 只加载面积图
// require('@antv/f2/lib/geom/interval') // 只加载柱状图
// require('@antv/f2/lib/geom/path') // 只加载路径图
// require('@antv/f2/lib/geom/point') // 只加载点图
// require('@antv/f2/lib/geom/polygon') // 只加载色块图
// require('@antv/f2/lib/geom/schema') // 只加载箱型图、股票图

// 坐标系类型
require('@antv/f2/lib/coord/polar') // 极坐标
require('@antv/f2/lib/coord/cartesian') // 直角坐标系（已经在 core 核心包中）
// Axis 坐标轴类型
require('@antv/f2/lib/component/axis/circle') // 弧长坐标轴（用于极坐标）

// adjust 数据调整类型
require('@antv/f2/lib/geom/adjust/') // 加载全部的 adjust 类型
// require('@antv/f2/lib/geom/adjust/dodge') // 只加载分组类型
// require('@antv/f2/lib/geom/adjust/stack') // 只加载层叠类型

// scale 度量类型
require('@antv/f2/lib/scale/time-cat') // 加载 timeCat 类型的度量

// 辅助
// 第一步：加载需要的 guide 组件
require('@antv/f2/lib/component/guide') // 加载全部的 guide 组件
// // 或者只加载需要的 guide 组件
// require('@antv/f2/lib/component/guide/arc') // 只加载 Guide.Arc 组件
// require('@antv/f2/lib/component/guide/html') // 只加载 Guide.Html 组件
// require('@antv/f2/lib/component/guide/text') // 只加载 Guide.Text 组件
// require('@antv/f2/lib/component/guide/rect') // 只加载 Guide.Rect 组件
// require('@antv/f2/lib/component/guide/line') // 只加载 Guide.Line 组件
// require('@antv/f2/lib/component/guide/tag') // 只加载 Guide.Tag 组件
// require('@antv/f2/lib/component/guide/region-filter') // 只加载 Guide.
// require('@antv/f2/lib/component/guide/point') // 只加载 Guide.Point 组件
require('@antv/f2/lib/animation/animate')
require('@antv/f2/lib/interaction')
require('@antv/f2/lib/interaction/base')

// 交互行为引入 Interaction
require('@antv/f2/lib/interaction/') // 引入所有的交互行为
// require('@antv/f2/lib/interaction/pie-select') // 只引入 pie-select 饼图选中交互
// require('@antv/f2/lib/interaction/interval-select') // 只引入 interval-select 柱状图选中交互
// require('@antv/f2/lib/interaction/pan') // 只引入 pan 图表平移交互
// require('@antv/f2/lib/interaction/pinch') // 引入 pinch 图表缩放交互

// 加载插件 Tooltip
const Tooltip = require('@antv/f2/lib/plugin/tooltip')

// 第二步：加载插件 Guide
const Guide = require('@antv/f2/lib/plugin/guide')
// 或者只加载需要的 guide 组件
// require('@antv/f2/lib/component/guide/arc') // 只加载 Guide.Arc 组件
// require('@antv/f2/lib/component/guide/html') // 只加载 Guide.Html 组件
// require('@antv/f2/lib/component/guide/text') // 只加载 Guide.Text 组件
// require('@antv/f2/lib/component/guide/rect') // 只加载 Guide.Rect 组件
// require('@antv/f2/lib/component/guide/line') // 只加载 Guide.Line 组件
// require('@antv/f2/lib/component/guide/tag') // 只加载 Guide.Tag 组件
// require('@antv/f2/lib/component/guide/region-filter') // 只加载 Guide.
require('@antv/f2/lib/component/guide/point') // 只加载 Guide.Point 组件

// 加载插件 Legend
const Legend = require('@antv/f2/lib/plugin/legend')

// 动画
const Animation = require('@antv/f2/lib/animation/detail')

// 加载插件 ScrollBar
const ScrollBar = require('@antv/f2/lib/plugin/scroll-bar')
// 加载饼图插件 PieLabel// 引入 PieLabel 模块
const PieLabel = require('@antv/f2/lib/plugin/pie-label')

const intervalLabel = require('@antv/f2/lib/plugin/interval-label')

// 通过注册插件方式引入
F2.Chart.plugins.register([Tooltip, Legend, Guide, Animation, ScrollBar, PieLabel, intervalLabel]) // 这里进行全局注册，也可以给 chart 的实例注册

Vue.prototype.$F2 = F2
// 打印全局配置，查看默认值
console.log(F2.Global)
