<!--
 * @Author: your name
 * @Date: 2020-07-14 17:02:01
 * @LastEditTime: 2020-07-14 17:07:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\TooltipShowChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>Tooltip 默认显示</h3>
    <canvas :id="`TooltipShowChart${Uid}`" />
  </div>
</template>

<script>
export default {
  name: 'TooltipShowChart',
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
        this.createTooltipShowChart()
      })
    },
    createTooltipShowChart() {
      const data = [{
        time: 'Jan.',
        tem: 1000
      }, {
        time: 'Feb.',
        tem: 2200
      }, {
        time: 'Mar.',
        tem: 2000
      }, {
        time: 'Apr.',
        tem: 2600
      }, {
        time: 'May.',
        tem: 2000
      }, {
        time: 'Jun.',
        tem: 2600
      }, {
        time: 'Jul.',
        tem: 2800
      }, {
        time: 'Aug.',
        tem: 2000
      }]
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'TooltipShowChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // console.log('chart===', chart)
      // Step 2: 载入数据源
      chart.source(data)
      this.$nextTick(() => {
        chart.repaint()
      })
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.source(data)
      chart.scale({
        time: {
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0
        }
      })
      chart.axis('time', {
        label: function label(text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          }
          if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.tooltip({
        showCrosshairs: true,
        onShow: function onShow(ev) {
          const items = ev.items

          items[0].name = items[0].title
        }
      })

      chart.area().position('time*tem')
      chart.line().position('time*tem')

      // Step 4: 渲染图表
      chart.render()
      this.$nextTick(() => {
        // 默认展示 tooltip
        const item = {
          time: 'Apr.',
          tem: 2600
        } // 要展示 tooltip 的数据
        const point = chart.getPosition(item) // 获取该数据的画布坐标
        chart.showTooltip(point) // 展示该点的 tooltip
      })
    }
  }
}
</script>
