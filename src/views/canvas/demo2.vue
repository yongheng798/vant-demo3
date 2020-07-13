<!--
 * @Author: your name
 * @Date: 2020-07-12 15:16:49
 * @LastEditTime: 2020-07-12 16:27:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\canvas\demo2.vue
-->
<template>
  <div class="canvas-demo-container">
    <h3 class="title">多矩形绘制</h3>
    <canvas ref="canvasDemo2" />
  </div>
</template>

<script>
export default {
  name: 'Demo2',
  mounted() {
    this.createCanvas()
  },
  methods: {
    createCanvas() {
      const canvas = this.$refs.canvasDemo2
      const ctx = canvas.getContext('2d') // 获得上下文

      canvas.width = window.innerWidth - 20 // 设置标签的属性宽高
      canvas.height = 200 // 千万不要用 canvas.style.height
      canvas.style.border = '1px solid #000'

      // 红色矩形
      ctx.beginPath()
      ctx.lineWidth = '6'
      ctx.strokeStyle = 'red'
      ctx.rect(5, 5, 290, 140)
      ctx.stroke()

      // 绿色矩形
      ctx.beginPath()
      ctx.lineWidth = '4'
      ctx.strokeStyle = 'green'
      ctx.rect(30, 30, 50, 50)
      ctx.stroke()

      // 蓝色矩形
      ctx.beginPath()
      ctx.lineWidth = '10'
      ctx.strokeStyle = 'blue'
      ctx.rect(50, 50, 150, 80)
      ctx.stroke()
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
