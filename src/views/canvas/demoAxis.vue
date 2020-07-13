<!--
 * @Author: your name
 * @Date: 2020-07-12 16:39:07
 * @LastEditTime: 2020-07-12 18:34:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\canvas\demoAxis.vue
-->
<template>
  <div class="canvas-demo-container">
    <h3 class="title">绘制坐标轴</h3>
    <canvas ref="demoAxis" />
  </div>
</template>

<script>

export default {
  name: 'DemoAxis',
  mounted() {
    this.createCanvas()
  },
  methods: {
    createCanvas() {
      const canvas = this.$refs.demoAxis
      const ctx = canvas.getContext('2d') // 获得上下文

      canvas.width = window.innerWidth - 20 // 设置标签的属性宽高
      canvas.height = 300 // 千万不要用 canvas.style.height
      canvas.style.border = '1px solid #000'
      // 绘制网格线
      // 外边距
      const AXIS_MARGIN = 40
      // 原点，将之设置到画布左下区域
      const AXIS_ORIGIN = { x: AXIS_MARGIN, y: canvas.height - AXIS_MARGIN }

      // y轴顶点位置
      const AXIS_TOP = AXIS_MARGIN
      // x轴顶点位置
      const AXIS_RIGHT = canvas.width - AXIS_MARGIN

      // 横向刻度线间距
      const HORIZONTAL_TICK_SPACING = 10
      // 垂直刻度线间距
      const VERTICAL_TICK_SPACING = 10

      // X轴长度
      const AXIS_WIDTH = AXIS_RIGHT - AXIS_ORIGIN.x
      // y轴长度
      const AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP

      // y轴上的点的最大值
      const NUM_VERTICAL_TICKS = AXIS_HEIGHT / VERTICAL_TICK_SPACING
      const NUM_HORIZONTAL_TICKS = AXIS_WIDTH / HORIZONTAL_TICK_SPACING
      // 刻度宽度
      const TICK_WIDTH = 10
      const TICKS_LINEWIDTH = 0.5
      const TICK_COLOR = 'red'

      const AXIS_LINEWIDTH = 1.0
      const AXIS_COLOR = 'blue'

      // 绘制图形
      this.drawGrid(ctx, 'lightgray', 10, 10)
      this.drawAxis(ctx, AXIS_COLOR, AXIS_LINEWIDTH, TICKS_LINEWIDTH, TICK_COLOR, AXIS_ORIGIN, AXIS_RIGHT, AXIS_TOP, NUM_VERTICAL_TICKS, TICK_WIDTH, VERTICAL_TICK_SPACING, NUM_HORIZONTAL_TICKS, HORIZONTAL_TICK_SPACING)
    },
    /**
     * 背景网格线
     * @param color
     * @param stepX
     * @param stepY
     */
    drawGrid(ctx, color, stepX, stepY) {
      const context = ctx
      context.strokeStyle = color
      context.lineWidth = 0.5

      for (let i = stepX + 0.5; i < context.canvas.width; i += stepX) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, context.canvas.height)
        context.stroke()
      }

      for (let i = stepY + 0.5; i < context.canvas.height; i += stepY) {
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(context.canvas.width, i)
        context.stroke()
      }
    },

    /**
     * 画坐标轴
     */
    drawAxis(ctx, AXIS_COLOR, AXIS_LINEWIDTH, TICKS_LINEWIDTH, TICK_COLOR, AXIS_ORIGIN, AXIS_RIGHT, AXIS_TOP, NUM_VERTICAL_TICKS, TICK_WIDTH, VERTICAL_TICK_SPACING, NUM_HORIZONTAL_TICKS, HORIZONTAL_TICK_SPACING) {
      const context = ctx
      context.save()
      context.strokeStyle = AXIS_COLOR
      context.lineWidth = AXIS_LINEWIDTH

      context.lineWidth = TICKS_LINEWIDTH
      context.strokeStyle = TICK_COLOR
      // 绘制X/Y轴
      this.drawHorizontalAxis(ctx, AXIS_ORIGIN, AXIS_RIGHT)
      this.drawVerticalAxis(ctx, AXIS_ORIGIN, AXIS_TOP)
      // 绘制X,Y刻度
      this.drawVerticalAxisTicks(ctx, AXIS_ORIGIN, NUM_VERTICAL_TICKS, TICK_WIDTH, VERTICAL_TICK_SPACING)
      this.drawHorizontalAxisTicks(ctx, NUM_HORIZONTAL_TICKS, TICK_WIDTH, AXIS_ORIGIN, HORIZONTAL_TICK_SPACING)

      context.restore()
    },

    /**
     * 绘制x轴
     */
    drawHorizontalAxis(ctx, AXIS_ORIGIN, AXIS_RIGHT) {
      const context = ctx
      context.beginPath()
      context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y)
      context.lineTo(AXIS_RIGHT, AXIS_ORIGIN.y)
      context.stroke()
    },

    /**
     * 绘制y轴
     */
    drawVerticalAxis(ctx, AXIS_ORIGIN, AXIS_TOP) {
      const context = ctx
      context.beginPath()
      context.moveTo(AXIS_ORIGIN.x, AXIS_ORIGIN.y)
      context.lineTo(AXIS_ORIGIN.x, AXIS_TOP)
      context.stroke()
    },

    /**
     * 绘制y轴刻度
     */
    drawVerticalAxisTicks(ctx, AXIS_ORIGIN, NUM_VERTICAL_TICKS, TICK_WIDTH, VERTICAL_TICK_SPACING) {
      const context = ctx
      // 小刻度长度的临时变量
      let deltaY

      for (let i = 1; i < NUM_VERTICAL_TICKS; i++) {
        context.beginPath()
        // 每5第五个刻度为长的小刻度
        if (i % 5 === 0) deltaY = TICK_WIDTH
        else deltaY = TICK_WIDTH / 2

        context.moveTo(AXIS_ORIGIN.x - deltaY, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING)
        context.lineTo(AXIS_ORIGIN.x + deltaY, AXIS_ORIGIN.y - i * VERTICAL_TICK_SPACING)
        context.stroke()
      }
    },

    /**
     * 绘制x轴刻度
     */
    drawHorizontalAxisTicks(ctx, NUM_HORIZONTAL_TICKS, TICK_WIDTH, AXIS_ORIGIN, HORIZONTAL_TICK_SPACING) {
      const context = ctx
      // 小刻度长度的临时变量
      let deltaY

      for (let i = 1; i < NUM_HORIZONTAL_TICKS; i++) {
        context.beginPath()
        // 每5第五个刻度为长的小刻度
        if (i % 5 === 0) deltaY = TICK_WIDTH
        else deltaY = TICK_WIDTH / 2

        context.moveTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y - deltaY)
        context.lineTo(AXIS_ORIGIN.x + i * HORIZONTAL_TICK_SPACING, AXIS_ORIGIN.y + deltaY)
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
