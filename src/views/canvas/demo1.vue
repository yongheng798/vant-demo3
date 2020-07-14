<!--
 * @Author: your name
 * @Date: 2020-07-12 11:58:53
 * @LastEditTime: 2020-07-14 09:00:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\canvas\demo1.vue
-->
<template>
  <div class="canvas-container-demo-warp">
    <h3 class="title">Canvas的基本认识</h3>
    <canvas id="canvasDemo1" ref="canvasDemo1" />
  </div>
</template>

<script>

export default {
  name: 'Demo1',
  data() {
    return {}
  },
  mounted() {
    this.createDemo1()
  },
  methods: {
    createDemo1() {
      // ===============基本绘制api====================
      // 获得画布
      // const canvas = document.querySelector('#canvasDemo1')
      const canvas = this.$refs.canvasDemo1
      const ctx = canvas.getContext('2d') // 获得上下文

      canvas.width = window.innerWidth - 20 // 设置标签的属性宽高
      canvas.height = 500 // 千万不要用 canvas.style.height
      canvas.style.border = '1px solid #000'
      // 绘制文本
      this.canvasFillText(ctx)

      // 绘制一条平行线
      this.canvasLineTo(ctx)
      // 绘制三角形路径
      this.canvasTriangle(ctx)

      // 绘制一个矩形
      this.canvasRect(ctx)
      // 绘制一个圆角矩形
      this.fillRoundRect(30, 280, 5, ctx, 100, 50, 5, '#f9bb4b')

      // 再画一个圆形
      this.canvasRound(ctx)
    },
    // 绘制一条横向线
    canvasLineTo(canvasEle) {
      const ctx = canvasEle // 获得上下文
      ctx.moveTo(30, 340.5)
      ctx.lineTo(330, 340.5)
      ctx.stroke()
    },
    canvasFillText(canvasEle) {
      const ctx = canvasEle // 获得上下文
      // 绘制文本
      ctx.moveTo(10, 10)
      ctx.fillStyle = 'purple' // 设置填充颜色为紫色
      ctx.font = '20px "微软雅黑"' // 设置字体
      ctx.textBaseline = 'top' // 设置字体底线对齐绘制基线
      ctx.textAlign = 'left' // 设置字体对齐的方式
      // ctx.strokeText('left', 150, 100)
      // 创建渐变
      const gradient = ctx.createLinearGradient(0, 0, 100, 0)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1.0', 'red')
      // 用渐变填色
      ctx.fillStyle = gradient

      ctx.fillText('Canvas基础知识', 20, 10) // 填充文字
    },
    // 绘制一个三角形
    canvasTriangle(canvasEle) {
      const ctx = canvasEle // 获得上下文
      ctx.beginPath() // 开始路径
      ctx.moveTo(50, 50) // 三角形，左顶点
      ctx.lineTo(100, 50) // 右顶点
      ctx.lineTo(100, 100) // 底部的点
      ctx.closePath() // 结束路径
      ctx.stroke() // 描边路径
    },
    // 矩形 正方形
    canvasRect(canvasEle) {
      const ctx = canvasEle // 获得上下文

      // 创建一个矩形，无填充
      ctx.rect(30, 30, 100, 100)
      ctx.stroke()

      // 绘制一个有阴影紫色矩形
      ctx.beginPath() // 开始路径
      ctx.strokeStyle = 'blue'
      ctx.fillStyle = 'rgba(255,0,255, .9)'
      // 设置阴影
      ctx.shadowColor = 'teal'
      ctx.shadowBlur = 10
      ctx.shadowOffsetX = 5
      ctx.shadowOffsetY = 5
      ctx.fillRect(30, 150, 100, 100)
      ctx.closePath() // 结束路径
      ctx.stroke() // 描边路径
    },
    // 应用案例，绘制一个圆角的矩形
    fillRoundRect(x, y, r, ctx, width = 13, height = 8, radius = 2, fillColor) {
      // 圆的直径必然要小于矩形的宽高
      if (2 * radius > width || 2 * radius > height) { return false }
      // 清除之前画过的
      ctx.clearRect(x, y, width, height)
      ctx.save()
      ctx.translate(x, y)
      // 绘制圆角矩形的各个边
      ctx.beginPath(0)
      // 从右下角顺时针绘制，弧度从0到1/2PI
      ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2)
      // 矩形下边线
      ctx.lineTo(radius, height)
      // 左下角圆弧，弧度从1/2PI到PI
      ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
      // 矩形左边线
      ctx.lineTo(0, radius)
      // 左上角圆弧，弧度从PI到3/2PI
      ctx.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2)
      // 上边线
      ctx.lineTo(width - radius, 0)
      // 右上角圆弧
      ctx.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2)
      // 右边线
      ctx.lineTo(width, height - radius)
      // 取消上一次带来的阴影
      ctx.shadowColor = 'teal'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.closePath()
      ctx.fillStyle = fillColor || '' // 若是给定了值就用给定的值否则给予默认值
      ctx.fill()
      ctx.restore()
    },
    // 画一个圆形
    canvasRound(ctx) {
      ctx.beginPath()
      ctx.arc(80, 405, 50, 0, 2 * Math.PI)

      // 取消上一次带来的阴影
      ctx.shadowColor = 'teal'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      ctx.closePath()
      ctx.fillStyle = 'rgba(0,0,255,1)'
      ctx.fill()
      ctx.stroke()
    }
  }
}

</script>

<style lang="less" scoped>
.canvas-container-demo-warp{
  margin: 30px auto;
  .title{
    text-align: left;
    margin: 20px;
    }
}
</style>
