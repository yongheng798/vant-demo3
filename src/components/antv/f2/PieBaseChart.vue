<!--
 * @Author: your name
 * @Date: 2020-07-13 14:21:36
 * @LastEditTime: 2020-07-13 14:34:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\PieBaseChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>圆形饼图</h3>
    <canvas :id="`PieBaseChart${Uid}`" ref="PieBaseChart" />
  </div>
</template>

<script>
import { pieMap, pieChartData } from '@/api/json/PieBaseChartData'

export default {
  name: 'PieBaseChart',
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
        this.createPieBaseChart(pieMap, pieChartData)
      })
    },
    createPieBaseChart(pieMap, chartData) {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'PieBaseChart' + this.Uid,
        pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // Step 2: 载入数据源
      chart.source(chartData, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%'
          }
        }
      })
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '  ' + pieMap[val]
        }
      })
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        radius: 0.85
      })
      chart.axis(false)
      chart.interval()
        .position('a*percent')
        .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
        .adjust('stack')
        .style({
          lineWidth: 1,
          stroke: '#fff',
          lineJoin: 'round',
          lineCap: 'round'
        })
        .animate({
          appear: {
            duration: 1200,
            easing: 'bounceOut'
          }
        })

      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
