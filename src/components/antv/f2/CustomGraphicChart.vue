<!--
 * @Author: your name
 * @Date: 2020-07-15 14:34:42
 * @LastEditTime: 2020-07-15 14:36:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\CustomGraphicChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>自定义画图</h3>
    <canvas :id="`customGraphicChart${Uid}`" />
  </div>
</template>

<script>
export default {
  name: 'CustomGraphicChart',
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
        this.createCustomGraphicChart()
      })
    },
    createCustomGraphicChart() {
      const { Canvas } = this.$F2.G // 引入 Canvas
      const canvas = new Canvas({
        el: 'customGraphicChart' + this.Uid,
        width: 200,
        height: 100
      }) // 创建 canvas 实例
      const container = canvas.addGroup({
        zIndex: 2
      }) // canvas 添加一个 group
      const itemGroup = container.addGroup({
        zIndex: 1
      }) // container 添加一个 group
      itemGroup.addShape('circle', {
        attrs: {
          x: 5,
          y: 0,
          r: 5,
          fill: 'red'
        }
      }) // itemGroup 中添加一个圆
      itemGroup.addShape('text', {
        attrs: {
          x: 17,
          y: 0,
          textAlign: 'start',
          textBaseline: 'middle',
          fontSize: 12,
          fill: 'red',
          text: '分类一'
        }
      }) // itemGroup 中添加一个文本
      const bbox = itemGroup.getBBox() // 获取 itemGroup 的包围盒
      container.addShape('rect', {
        zIndex: 0,
        attrs: {
          x: bbox.minX - 5,
          y: bbox.minY - 5,
          width: bbox.width + 10,
          height: bbox.height + 10,
          fill: 'rgba(0, 0, 0, 0.09)',
          radius: 4
        }
      }) // container 中添加一个矩形
      container.sort() // container 容器内元素排序
      container.moveTo(30, 50) // 将 container 移至 (30, 50)

      canvas.addShape('rect', {
        zIndex: 0,
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 100,
          fill: 'rgba(0, 0, 0, 0.09)',
          radius: 4
        }
      }) // canvas 中添加一个矩形

      canvas.sort() // canvas 容器内的元素排序
      canvas.draw() // 绘制
    }
  }
}
</script>
