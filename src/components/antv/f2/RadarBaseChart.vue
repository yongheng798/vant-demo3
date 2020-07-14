<!--
 * @Author: your name
 * @Date: 2020-07-13 14:34:39
 * @LastEditTime: 2020-07-14 15:57:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\RadarBaseChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>雷达图</h3>
    <canvas :id="`RadarBaseChart${Uid}`" ref="RadarBaseChart" />
  </div>
</template>

<script>
import { radarChartData } from '@/api/json/RadarChartData'
import _ from 'lodash'
export default {
  name: 'RadarBaseChart',
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
        this.createRadarBaseChart(radarChartData)
      })
    },
    createRadarBaseChart(chartData) {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'RadarBaseChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // Step 2: 载入数据源
      chart.coord('polar')
      chart.source(chartData, {
        score: {
          min: 0,
          max: 120,
          nice: false,
          tickCount: 4
        }
      })

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
      chart.axis('score', {
        label: function label(text, index, total) {
          if (index === total - 1) {
            return null
          }
          return {
            top: true
          }
        },
        grid: function grid(text) {
          if (text === '120') {
            return {
              lineDash: null
            }
          }
        },
        line: {
          top: false
        }
      })
      chart.area().position('item*score').color('user')
        .animate({
          appear: {
            animation: 'groupWaveIn'
          }
        })
      chart.line().position('item*score').color('user')
        .animate({
          appear: {
            animation: 'groupWaveIn'
          }
        })
      chart.point().position('item*score').color('user')
        .style({
          stroke: '#fff',
          lineWidth: 1
        })
        .animate({
          appear: {
            delay: 300
          }
        })

      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
