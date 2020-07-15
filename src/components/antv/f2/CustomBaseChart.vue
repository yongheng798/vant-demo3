<!--
 * @Author: your name
 * @Date: 2020-07-15 12:22:00
 * @LastEditTime: 2020-07-15 12:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\CustomCustomBaseChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>自定义图形</h3>
    <canvas :id="`customBaseChart${Uid}`" />
  </div>
</template>

<script>
export default {
  name: 'CustomBaseChart',
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
        this.createCustomBaseChart()
      })
    },
    createCustomBaseChart() {
      const Shape = this.$F2.Shape
      Shape.registerShape('interval', 'triangle', {
        getPoints: function(cfg) {
          const x = cfg.x
          const y = cfg.y
          const y0 = cfg.y0
          const width = cfg.size
          return [
            { x: x - width / 2, y: y0 },
            { x: x, y: y },
            { x: x + width / 2, y: y0 }
          ]
        },
        draw: function(cfg, group) {
          const points = this.parsePoints(cfg.points) // 将0-1空间的坐标转换为画布坐标
          const polygon = group.addShape('polygon', {
            attrs: {
              points: [
                { x: points[0].x, y: points[0].y },
                { x: points[1].x, y: points[1].y },
                { x: points[2].x, y: points[2].y }
              ],
              fill: cfg.color
            }
          })
          return polygon // 将自定义Shape返回
        }
      })

      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'customBaseChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 30, 'auto'],
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
      chart.interval().position('genre*sold').color('genre').shape('triangle')
      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
