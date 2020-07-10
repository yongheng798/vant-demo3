<!--
 * @Author: your name
 * @Date: 2020-07-08 12:30:55
 * @LastEditTime: 2020-07-10 09:24:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BarLineChart.vue
-->
<template>
  <div class="chart-wrapper">
    <canvas :id="`barDodgeChart${Uid}`" />
  </div>
</template>

<script>
import { barDodgeChart } from '../../../api/json/barDodgeChart'
import _ from 'lodash'

export default {
  name: 'BarDodgeChart',
  data() {
    return {
      Uid: (new Date()).getTime(),
      chart: null
    }
  },
  watch: {},
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.$nextTick(() => {
        this.createChart(barDodgeChart)
      })
    },
    createChart(chartDate) {
      if (!chartDate.length) return
      if (this.chart) {
        this.chart.clear()
        this.chart.init()
      }
      const chartWdith = window.innerWidth - 20
      // 创建图形
      this.chart = new this.$F2.Chart({
        id: 'barDodgeChart' + this.Uid,
        pixelRatio: window.devicePixelRatio,
        padding: ['auto', 'auto', 90, 'auto'],
        width: chartWdith,
        height: 300
      })

      // console.log('this.chart===', this.chart)
      this.chart.clear()
      this.chart.source(chartDate)
      this.$nextTick(() => {
        this.chart.repaint()
      })
      const _this = this
      this.chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = _this.chart.get('legendController').legends.top[0]
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
          const legend = _this.chart.get('legendController').legends.top[0]
          legend.setItems(_this.chart.getLegendItems().country)
        }
      })

      this.chart.interval()
        .position('月份*月均降雨量')
        .color('name')
        .adjust({
          type: 'dodge',
          marginRatio: 0.05 // 设置分组间柱子的间距
        })
        // 折线图
      this.chart.line().position('月份*line').color('#000').shape('smooth')
      this.chart.render()
    }
  }
}
</script>

<style scoped>

</style>
