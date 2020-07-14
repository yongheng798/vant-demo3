<!--
 * @Author: your name
 * @Date: 2020-07-14 18:22:26
 * @LastEditTime: 2020-07-14 18:33:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\GuideChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>辅助元素 图例自定义</h3>
    <canvas :id="`GuideChart${Uid}`" />
  </div>
</template>

<script>

export default {
  name: 'GuideChart',
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
        this.createGuideChart()
      })
    },
    createGuideChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'GuideChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        // padding: ['auto', 'auto', 'auto', 16],
        width: window.innerWidth - 20,
        height: 300
      })

      const data = [{
        time: '周一',
        tem: 6.9,
        rain: 10
      }, {
        time: '周二',
        tem: 9.5,
        rain: 13
      }, {
        time: '周三',
        tem: 14.5,
        rain: 14
      }, {
        time: '周四',
        tem: 18.2,
        rain: 10
      }, {
        time: '周五',
        tem: 21.5,
        rain: 12
      }, {
        time: '周六',
        tem: 25.2,
        rain: 16
      }, {
        time: '周日',
        tem: 26.5,
        rain: 13
      }]

      chart.source(data)
      chart.tooltip({
        showCrosshairs: true,
        crosshairsStyle: {
          stroke: '#1890ff'
        },
        background: {
          fill: '#1890ff'
        },
        nameStyle: {
          fill: '#fff'
        },
        onShow: function onShow(ev) {
          ev.items.pop() // 将重复的去除
        }
      })
      chart.axis('time', {
        grid: null
      })
      chart.axis('rain', false)

      chart.interval().position('time*tem').color('#873bf4')
      chart.line().position('time*rain').color('#5ed470').shape('smooth')
      chart.point().position('time*rain').style({
        stroke: '#5ed470',
        fill: '#fff',
        lineWidth: 2
      })

      // 绘制辅助线
      chart.guide().line({
        start: function start(xScale, yScales) {
          var sum = 0
          var yScale = yScales[1]
          yScale.values.forEach(function(v) {
            sum += v
          })
          return ['min', sum / yScale.values.length]
        },
        end: function end(xScale, yScales) {
          var sum = 0
          var yScale = yScales[1]
          yScale.values.forEach(function(v) {
            sum += v
          })

          return ['max', sum / yScale.values.length]
        },
        style: {
          stroke: '#808080', // 线的颜色
          lineDash: [0, 2, 2], // 虚线的设置
          lineWidth: 1 // 线的宽度
          // 图形样式配置
        }
      })
      chart.guide().text({
        position: function position(xScale, yScales) {
          var sum = 0
          var yScale = yScales[1]
          yScale.values.forEach(function(v) {
            sum += v
          })
          return ['min', sum / yScale.values.length]
        },
        content: '平均降雨量',
        style: {
          textAlign: 'start',
          textBaseline: 'bottom',
          fill: '#808080'
        },
        offsetY: -5
      })
      // 单位
      chart.guide().text({
        position: ['min', 'max'],
        content: 'ml',
        offsetX: -18,
        offsetY: -22,
        style: { // 文本的图形样式属性
          fill: 'rgba(0,0,0,0.7)', // 文本颜色
          fontSize: '12', // 文本大小
          fontWeight: '200' // 文本粗细
        },
        limitInPlot: true // 是否将 guide 元素限制在绘图区域图，默认为 false
      })

      chart.render()
    }
  }
}
</script>
