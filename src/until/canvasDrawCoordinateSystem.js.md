/*
 * @Author: your name
 * @Date: 2020-07-12 16:10:44
 * @LastEditTime: 2020-07-12 16:14:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\until\canvasDrawCoordinateSystem.js
 */
class canvasDrawCoordinateSystem {
  constructor(canvas, padding) {
    this.canvas = canvas || document.querySelector('canvas')
    this.padding = padding
    this.ctx = this.canvas.getContext('2d')
    // 根据padding计算原点
    this.x0 = 0 + padding
    this.y0 = this.canvas.height - padding

    // 定义箭头的长度和高度
    this.arrowWidth = 30
    this.arrowHeight = 5

    // 定义刻度间隔
    this.space = 50
    // 定义刻度长度
    this.markWidth = 5

    // 绘制坐标轴
    this.drawAxis()
    // 绘制网格
    this.drawDrid()
  }
  // 绘制坐标轴的方法
  drawAxis() {
    var { ctx, canvas, x0, y0, arrowWidth, arrowHeight, markWidth, space } = this
    // 绘制x轴
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(canvas.width, y0)
    ctx.stroke()
    // 绘制箭头
    ctx.beginPath()
    ctx.moveTo(canvas.width, y0)
    ctx.lineTo(canvas.width - arrowWidth, y0 - arrowHeight)
    ctx.lineTo(canvas.width - arrowWidth, y0 + arrowHeight)
    ctx.closePath()
    ctx.fill()
    // 绘制x轴的刻度
    for (var x = x0 + space; x < canvas.width - arrowWidth; x += space) {
      ctx.beginPath()
      ctx.moveTo(x, y0)
      ctx.lineTo(x, y0 - markWidth)
      ctx.stroke()
    }

    // 绘制y轴
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x0, 0)
    ctx.stroke()
    // 绘制箭头
    ctx.beginPath()
    ctx.moveTo(x0, 0)
    ctx.lineTo(x0 - arrowHeight, arrowWidth)
    ctx.lineTo(x0 + arrowHeight, arrowWidth)
    ctx.closePath()
    ctx.fill()
    // 绘制x轴的刻度
    for (var y = y0 - space; y > arrowWidth; y -= space) {
      ctx.beginPath()
      ctx.moveTo(x0, y)
      ctx.lineTo(x0 + markWidth, y)
      ctx.stroke()
    }

    // 绘制原点标题
    ctx.textBaseline = 'top'
    ctx.font = '15px 微软雅黑'
    ctx.textAlign = 'center'
    ctx.fillText('(0,0)', x0, y0 + 2)
  }

  // 绘制网格的方法
  drawDrid() {
    var { canvas, space, x0, y0 } = this
    // 定义当前坐标
    var x = x0; var y = y0
    // 设置虚线
    ctx.setLineDash([5, 10])
    // 绘制水平方向的网格线
    for (y = y0 + space; y > 0; y -= space) {
      // 开启路径
      ctx.beginPath()

      ctx.moveTo(x0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }
    // 绘制垂直方向的网格线
    for (x = x0 + space; x < canvas.width; x += space) {
      // 开启路径
      ctx.beginPath()

      ctx.moveTo(x, 0)
      ctx.lineTo(x, y0)
      ctx.stroke()
    }
    ctx.beginPath()
  }

  // 坐标转换工具
  transform(x = 0, y = 0) {
    var { padding, y0 } = this
    x = x + padding
    y = y0 - y
    return [x, y]
  }
}

