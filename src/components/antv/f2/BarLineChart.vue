<!--
 * @Author: your name
 * @Date: 2020-07-08 12:30:55
 * @LastEditTime: 2020-07-09 16:22:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BarLineChart.vue
-->
<template>
  <div class="chart-wrapper">
    <canvas :id="`barLineChart${Uid}`" />
  </div>
</template>

<script>
import { barLineChart } from '../../../api/json/barLineChart'

export default {
  name: 'BarLineChart',
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
        this.createChart(barLineChart)
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
        id: 'barLineChart' + this.Uid,
        pixelRatio: window.devicePixelRatio,
        padding: ['auto', 'auto', 90, 'auto'],
        width: chartWdith,
        height: 300
      })

      console.log('this.chart===', this.chart)
      this.chart.clear()
      this.chart.source(chartDate, {
        score: {
          tickInterval: 50,
          alias: '个人分数'
        },
        avgScore: {
          ticks: [0, 17, 33, 50, 67, 83, 100],
          alias: '平均分数'
        }
      })
      this.$nextTick(() => {
        this.chart.repaint()
      })

      this.chart.axis('avgScore', {
        grid: null
      })
      this.chart.axis('name', {
        label: {
          rotate: Math.PI / 3,
          textAlign: 'start',
          textBaseline: 'middle'
        }
      })
      // 自定义图例内容以及交互行为

      this.chart.interval().position('name*score').color('#FACC14')
      this.chart.line().position('name*avgScore').color('#000').shape('smooth')
      // this.chart.point().position('name*avgScore').size(3).style({
      //   fill: '#000',
      //   stroke: '#fff',
      //   lineWidth: 1
      // })
      this.chart.render()
    },
    // 画布圆角
    fillRoundRect(cxt, x, y, width, height, radius, /* optional*/ fillColor) {
      // 圆的直径必然要小于矩形的宽高
      if (2 * radius > width || 2 * radius > height) { return false }

      cxt.save()
      cxt.translate(x, y)
      // 绘制圆角矩形的各个边
      // drawRoundRectPath(cxt, width, height, radius);
      cxt.beginPath(0)
      // 从右下角顺时针绘制，弧度从0到1/2PI
      cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2)
      // 矩形下边线
      cxt.lineTo(radius, height)
      // 左下角圆弧，弧度从1/2PI到PI
      cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
      // 矩形左边线
      cxt.lineTo(0, radius)
      // 左上角圆弧，弧度从PI到3/2PI
      cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2)
      // 上边线
      cxt.lineTo(width - radius, 0)
      // 右上角圆弧
      cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2)
      // 右边线
      cxt.lineTo(width, height - radius)
      cxt.closePath()
      cxt.fillStyle = fillColor || '#000' // 若是给定了值就用给定的值否则给予默认值
      cxt.fill()
      cxt.restore()
    },
    findLegendItem(name) {
      const legendItems = this.chartLegendData()
      let index = void 0
      for (var i = 0; i < legendItems.length; i++) {
        if (legendItems[i].name === name) {
          index = i
          break
        }
      }
      return index
    },
    chartLegendData() {
      const legendItems = [{
        name: '个人分数',
        marker: 'square',
        fill: '#FACC14',
        checked: true
      }, {
        name: '平均分数',
        marker: function marker(x, y, r, ctx) {
          ctx.lineWidth = 1
          ctx.strokeStyle = ctx.fillStyle
          ctx.moveTo(x - r - 3, y)
          ctx.lineTo(x + r + 3, y)
          ctx.stroke()
          ctx.arc(x, y, r, 0, Math.PI * 2, false)
          ctx.fill()
        },
        fill: '#000',
        checked: true
      }]
      return legendItems
    }
  }
}
</script>

<style scoped>

</style>
