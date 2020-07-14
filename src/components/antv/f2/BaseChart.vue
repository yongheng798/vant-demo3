<!--
 * @Author: your name
 * @Date: 2020-07-08 15:09:51
 * @LastEditTime: 2020-07-14 15:56:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BaseChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>基本图形</h3>
    <canvas :id="`baseChart${Uid}`" />
  </div>
</template>

<script>
export default {
  name: 'BaseChart',
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
        this.createBaseChart()
      })
    },
    createBaseChart() {
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'baseChart' + this.Uid,
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
      chart.interval()
        .position('genre*sold')
        .color('genre')
      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
