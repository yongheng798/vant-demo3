<!--
 * @Author: your name
 * @Date: 2020-07-14 17:21:02
 * @LastEditTime: 2020-07-14 17:27:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\LegendChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>Tooltip X轴提示信息</h3>
    <canvas :id="`LegendChart${Uid}`" />
  </div>
</template>

<script>
import { legendChart } from '@/api/json/legendChart'
export default {
  name: 'LegendChart',
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
        this.createLegendChart()
      })
    },
    createLegendChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'LegendChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        // padding: ['auto', 'auto', 'auto', 16],
        width: window.innerWidth - 20,
        height: 300
      })

      chart.source(legendChart, {
        'School Year': {
          tickCount: 3
        }
      })
      // 设置图例居中显示
      chart.legend({
        align: 'center',
        itemWidth: null // 图例项按照实际宽度渲染
      })
      // tooltip 与图例结合
      chart.tooltip({
        showCrosshairs: true
      })
      chart.line()
        .position('School Year*value')
        .color('type')
        .style('type', {
          lineDash: function lineDash(val) {
            if (val === 'Total') {
              return [1, 4]
            }
            return null
          }
        })
      chart.point().position('School Year*value').color('type')
      chart.render()
    }
  }
}
</script>
