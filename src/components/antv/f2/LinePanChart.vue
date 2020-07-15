<!--
 * @Author: your name
 * @Date: 2020-07-15 11:15:46
 * @LastEditTime: 2020-07-15 11:18:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\LinePanChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>折线图-平移</h3>
    <canvas :id="`LinePanChart${Uid}`" ref="LinePanChart" />
  </div>
</template>

<script>
import { linePanChartData } from '@/api/json/linePanChartData'

export default {
  name: 'LinePanChart',
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
        this.createLinePanChart()
      })
    },
    createLinePanChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'LinePanChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 40, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // console.log('chart===', chart)
      // Step 2: 载入数据源
      chart.source(linePanChartData, {
        release: {
          min: 1990,
          max: 2010
        }
      })
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        background: {
          radius: 2,
          fill: '#1890FF',
          padding: [3, 5]
        },
        nameStyle: {
          fill: '#fff'
        },
        onShow: function onShow(ev) {
          const items = ev.items
          items[0].name = items[0].title
        }
      })
      chart.line().position('release*count')
      chart.point().position('release*count').style({
        lineWidth: 1,
        stroke: '#fff'
      })

      chart.interaction('pan')
      // 定义进度条
      chart.scrollBar({
        mode: 'x',
        xStyle: {
          offsetY: -5
        }
      })
      // 绘制 tag
      chart.guide().tag({
        position: [1969, 1344],
        withPoint: false,
        content: '1,344',
        limitInPlot: true,
        offsetX: 5,
        direct: 'cr'
      })
      chart.render()
    }
  }
}
</script>
