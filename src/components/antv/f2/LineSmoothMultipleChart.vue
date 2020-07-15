<!--
 * @Author: your name
 * @Date: 2020-07-15 11:04:58
 * @LastEditTime: 2020-07-15 11:18:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\LineSmoothMultipleChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>折线图-对比</h3>
    <canvas :id="`LineSmoothMultipleChart${Uid}`" ref="LineSmoothMultipleChart" />
  </div>
</template>

<script>
import { lineMultipChartData } from '@/api/json/lineMultipChartData'
import _ from 'lodash'
export default {
  name: 'LineSmoothMultipleChart',
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
        this.createLineSmoothMultipleChart()
      })
    },
    createLineSmoothMultipleChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'LineSmoothMultipleChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 30, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // console.log('chart===', chart)
      // Step 2: 载入数据源
      chart.source(lineMultipChartData)
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.scale('date', {
        type: 'timeCat',
        tickCount: 3
      })
      chart.scale('value', {
        tickCount: 5
      })
      chart.axis('date', {
        label: function label(text, index, total) {
        // 只显示每一年的第一天
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
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
      chart.line().position('date*value').color('type')
      chart.render()
    }
  }
}
</script>
