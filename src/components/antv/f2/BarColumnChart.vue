<!--
 * @Author: your name
 * @Date: 2020-07-13 12:33:36
 * @LastEditTime: 2020-07-14 15:55:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BarColumnChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>分组柱状图</h3>
    <canvas :id="`BarColumnChart${Uid}`" ref="BarColumnChart" />
  </div>
</template>

<script>
import { barColumnChart } from '@/api/json/BarColumnChart'
import _ from 'lodash'
export default {
  name: 'BarColumnChart',
  data() {
    return {
      Uid: (new Date()).getTime()
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.$nextTick(() => {
        this.createBarColumnChart(barColumnChart)
      })
    },
    createBarColumnChart(chartData) {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'BarColumnChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // Step 2: 载入数据源
      chart.source(chartData)
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart.get('legendController').legends.top[0]
          const tooltipItems = obj.items
          const legendItems = legend.items
          const map = {}
          legendItems.forEach(function(item) {
            map[item.name] = _.clone(item)
          })
          tooltipItems.forEach(function(item) {
            const name = item.name
            const value = item.value
            if (map[name]) {
              map[name].value = value
            }
          })
          legend.setItems(_.values(map))
        },
        onHide: function onHide() {
          const legend = chart.get('legendController').legends.top[0]
          legend.setItems(chart.getLegendItems().country)
        }
      })

      chart.interval()
        .position('月份*月均降雨量')
        .color('name')
        .adjust({
          type: 'dodge',
          marginRatio: 0.05 // 设置分组间柱子的间距
        })
      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
