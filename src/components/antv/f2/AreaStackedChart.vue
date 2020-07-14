<!--
 * @Author: your name
 * @Date: 2020-07-13 11:42:50
 * @LastEditTime: 2020-07-14 15:55:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\AreaStackedChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>面积图-有断点和负数值</h3>
    <canvas :id="`areaStackedChart${Uid}`" ref="areaStackedChart" />
  </div>
</template>

<script>
import { areaStackedChart } from '@/api/json/areaStackedChart'
import _ from 'lodash'
export default {
  name: 'AreaStackedChart',
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
        this.createAreaStackedChart(areaStackedChart)
      })
    },
    createAreaStackedChart(chartData) {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'areaStackedChart' + this.Uid,
        pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        // width: window.innerWidth - 20,
        height: 300
      })

      // Step 2: 载入数据源
      chart.source(chartData, {
        date: {
          range: [0, 1],
          type: 'timeCat',
          mask: 'MM-DD'
        },
        value: {
          max: 300,
          tickCount: 4
        }
      })
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.tooltip({
        showCrosshairs: true,
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
      chart.axis('date', {
        label: function label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.area()
        .position('date*value')
        .color('city')
        .adjust('stack')
      chart.line()
        .position('date*value')
        .color('city')
        .adjust('stack')
      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
