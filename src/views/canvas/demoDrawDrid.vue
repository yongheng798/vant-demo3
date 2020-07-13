<!--
 * @Author: your name
 * @Date: 2020-07-12 16:02:10
 * @LastEditTime: 2020-07-12 16:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\canvas\demoDrawDrid.vue
-->
<template>
  <div class="canvas-demo-container">
    <h3 class="title">绘制网格线</h3>
    <canvas ref="demoDrawDrid" />
  </div>
</template>

<script>

export default {
  name: 'DemoDrawDrid',
  mounted() {
    this.createCanvas()
  },
  methods: {
    createCanvas() {
      const canvas = this.$refs.demoDrawDrid
      const ctx = canvas.getContext('2d') // 获得上下文

      canvas.width = window.innerWidth - 20 // 设置标签的属性宽高
      canvas.height = 300 // 千万不要用 canvas.style.height
      canvas.style.border = '1px solid #000'
      // 绘制网格线
      this.canvasDrawGrid(ctx, '#ccc', 10, 10)
    },
    // 绘制网格线
    canvasDrawGrid(context, color, stepx, stepy) {
      context.strokeStyle = color
      context.lineWidth = 0.5
      for (let i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, context.canvas.height)
        context.stroke()
      }

      for (let i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(context.canvas.width, i)
        context.stroke()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.canvas-demo-container{
  margin: 30px auto;
  .title{
    text-align: left;
    margin: 20px;
    }
}
</style>
