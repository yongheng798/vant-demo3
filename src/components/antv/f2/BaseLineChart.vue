<!--
 * @Author: your name
 * @Date: 2020-07-13 10:45:37
 * @LastEditTime: 2020-07-14 15:56:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BaseLine.vue
-->
<template>
  <div class="chart-containner">
    <h3>折线图</h3>
    <canvas :id="`baseLineChart${Uid}`" ref="baseLineChart" />
  </div>
</template>

<script>
export default {
  name: 'BaseLineChart',
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
        this.createBaseLineChart()
      })
    },
    createBaseLineChart() {
      const data = [{
        day: '周一',
        value: 300
      }, {
        day: '周二',
        value: 400
      }, {
        day: '周三',
        value: 350
      }, {
        day: '周四',
        value: 500
      }, {
        day: '周五',
        value: 490
      }, {
        day: '周六',
        value: 600
      }, {
        day: '周日',
        value: 900
      }]
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'baseLineChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // console.log('chart===', chart)
      // Step 2: 载入数据源
      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [0, 1]
        }
      })
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items
          items[0].name = null
          items[0].value = '$ ' + items[0].value
        }
      })
      chart.axis('day', {
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
      chart.line().position('day*value')
      chart.point().position('day*value').style({
        stroke: '#fff',
        lineWidth: 1
      })
      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
