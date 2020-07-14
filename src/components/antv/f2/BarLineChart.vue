<!--
 * @Author: your name
 * @Date: 2020-07-08 12:30:55
 * @LastEditTime: 2020-07-14 12:19:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BarLineChart.vue
-->

<template>
  <div class="chart-wrapper">
    <h3>柱形图+折线图+点位图</h3>
    <div class="chart-box">
      <div ref="chartTips" class="f2-tooltips">
        <span />
        <span />
      </div>
      <canvas :id="`barLineChart${Uid}`" ref="canvasBarLineChart" />
    </div>
  </div>
</template>

<script>
// import { barLineChart, baseLegendObj } from '../../../api/json/barLi  neChart'

export default {
  name: 'BarLineChart',
  props: {
    barLineChart: {
      type: Array,
      required: true,
      default: () => []
    },
    baseLegendObj: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      Uid: (new Date()).getTime(),
      chart: null
    }
  },
  watch: {
    // 普通监听，如果不使用vue的mounted，则不渲染画布，不往下执行方法
    // barLineChart: (val) => {
    //   this.initChart()
    // }
    // 深度监听，同样不往下执行方法
    // barLineChart: {
    //   handler(val) {
    //     setTimeout(() => {
    //       this.initChart()
    //     }, 20)
    //   },
    //   deep: true
    // }
  },
  // 使用watch可以不用mounted
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      // this.createChart(this.barLineChart, this.baseLegendObj)
      this.$nextTick(() => {
        // this.createChart(barLineChart, baseLegendObj)
        this.createChart(this.barLineChart, this.baseLegendObj)
      })
    },
    createChart(chartData, baseLegendObj) {
      if (!chartData.length) return
      if (this.chart) {
        this.chart.clear()
        this.chart.interaction()
        this.chart.init()
      }
      const chartWdith = window.innerWidth - 20
      // 创建图形
      this.chart = new this.$F2.Chart({
        id: 'barLineChart' + this.Uid,
        pixelRatio: window.devicePixelRatio,
        padding: ['50', 'auto', '50', 'auto'],
        width: chartWdith,
        height: 300
      })
      // 所有数据
      const chartBaseData = this.chartDataOptimised(chartData)
      console.log('this.chartBaseData===', chartBaseData)
      // 图例数据
      const chartLegendItems = this.chartLegendData(baseLegendObj)
      console.log('chartLegendItems===', chartLegendItems)
      // 右边刻度值
      let rightTicksObj = []
      if (Array.isArray(chartBaseData.rightLineData) && chartBaseData.rightLineData.length) {
        rightTicksObj = this.chartTicksLineData(chartBaseData.rightLineData)
        console.log('this.rightTicksObj===', rightTicksObj)
      }
      // 左边刻度值
      let leftTicksObj = []
      if (Array.isArray(chartBaseData.leftLineData) && chartBaseData.leftLineData.length) {
        leftTicksObj = this.chartTicksLineData(chartBaseData.leftLineData)
        console.log('this.leftTicksObj===', leftTicksObj)
      }
      // X轴数据
      let xLineArrData = []
      if (Array.isArray(chartBaseData.xLineData) && chartBaseData.xLineData.length) {
        xLineArrData = chartBaseData.xLineData
        console.log('this.xLineArrData===', xLineArrData)
      }

      this.chart.clear()
      this.chart.source(chartBaseData.chartAllData, {
        name: {
          tickCount: (xLineArrData.length > 7) ? 7 : xLineArrData.length,
          values: (xLineArrData.length > 7) ? xLineArrData.slice(-7) : xLineArrData,
          ticks: xLineArrData,
          type: 'timeCat'
        },
        score: {
          tickCount: leftTicksObj.tickCounts,
          ticks: leftTicksObj.yTicksArr.length ? leftTicksObj.yTicksArr : [],
          min: leftTicksObj.yFloorMin,
          max: leftTicksObj.yCeilMax,
          nice: true,
          formatter: function formatter(val) {
            return val.toFixed(2)
          }
        },
        avgScore: {
          tickCount: rightTicksObj.tickCounts,
          ticks: rightTicksObj.yTicksArr.length ? rightTicksObj.yTicksArr : [],
          min: rightTicksObj.yFloorMin,
          max: rightTicksObj.yCeilMax,
          nice: true,
          formatter: function formatter(val) {
            return val.toFixed(2)
          }
        }
      })
      this.$nextTick(() => {
        this.chart.repaint()
      })
      // 刻度线
      this.chart.axis('avgScore', {
        grid: {
          lineDash: null,
          stroke: '#4c4d50'
        },
        line: null,
        tickLine: null,
        label: (text, index, total) => {
          const cfg = {}
          cfg.fill = 'rgba(255,255,255,0.7)'
          return cfg
        }
      })

      // 刻度线
      this.chart.axis('score', {
        grid: {
          lineDash: null,
          stroke: '#4c4d50'
        },
        line: null,
        tickLine: null,
        label: (text, index, total) => {
          const cfg = {}
          cfg.fill = 'rgba(255,255,255,0.7)'
          return cfg
        }
      })

      this.chart.axis('name', {
        label: (text, index, total) => {
          const cfg = {}
          cfg.text = text.slice(5)
          cfg.fill = 'rgba(255,255,255,0.7)'
          return cfg
        },
        line: null
      })
      // 图例
      this.chart.legend({
        position: 'bottom',
        align: 'center',
        custom: true,
        itemWidth: null,
        items: chartLegendItems,
        wordSpace: 18,
        nameStyle: {
          fill: 'rgba(255,255,255,0.8)'
        }, // 图例项 key 值文本样式
        valueStyle: {
          fill: '#333',
          fontWeight: 'bold' // 图例项 value 值文本样式
        }
      })
      // 辅助单位
      this.chart.guide().text({
        position: ['min', 'max'],
        content: chartLegendItems.length > 0 ? chartLegendItems[0].unit : '分',
        offsetX: -18,
        offsetY: -22,
        style: { // 文本的图形样式属性
          fill: 'rgba(255,255,255,0.7)', // 文本颜色
          fontSize: '12', // 文本大小
          fontWeight: '200' // 文本粗细
        },
        limitInPlot: true // 是否将 guide 元素限制在绘图区域图，默认为 false
      })
      // 辅助单位
      this.chart.guide().text({
        position: ['max', 'max'],
        content: chartLegendItems.length > 1 ? chartLegendItems[1].unit : '%',
        offsetX: 8,
        offsetY: -22,
        style: { // 文本的图形样式属性
          fill: 'rgba(255,255,255,0.7)', // 文本颜色
          fontSize: '12', // 文本大小
          fontWeight: '200' // 文本粗细
        },
        limitInPlot: true // 是否将 guide 元素限制在绘图区域图，默认为 false
      })
      const _this = this
      const tooltipsElement = this.$refs.chartTips
      // tooltip点击提示
      console.log('===========', this.chart)
      this.chart.tooltip({
        alwaysShow: false, // 当移出触发区域，是否仍显示提示框内容，默认为 false，移出触发区域 tooltip 消失，设置为 true 可以保证一直显示提示框内容
        offsetX: 0, // x 方向的偏移
        offsetY: 0, // y 方向的偏移
        triggerOn: ['click'], // tooltip 出现的触发行为，可自定义，用法同 legend 的 triggerOn
        triggerOff: 'touchend', // 消失的触发行为，可自定义
        showTitle: true, // 是否展示标题，默认不展示
        showCrosshairs: true, // 是否显示辅助线，点图、路径图、线图、面积图默认展示
        crosshairsStyle: {
          stroke: 'rgba(0, 255, 255, 0.75)',
          lineWidth: 1.5,
          lineDash: ''
        }, // 配置辅助线的样式
        // showTooltipMarker: false, // 是否显示 tooltipMarker
        // showItemMarker: false, // 是否展示每条记录项前面的 marker
        itemMarkerStyle: {
          radius: 7,
          symbol: 'circle',
          lineWidth: 2,
          stroke: '#fff'
        }, // 每条记录项前面的 marker 的样式配置
        custom: true, // 是否自定义 tooltip 提示框
        crosshairsType: 'y', // 辅助线的种类
        snap: true, // 是否将辅助线准确定位至数据点
        onShow: (ev) => {
          var currentData = ev.items[0]
          console.log('tooltip onShow', ev)
          var scoreCurrent = isNaN(currentData.origin.score) ? '-' : currentData.origin.score.toFixed(2)
          var avgScoreCurrent = isNaN(currentData.origin.avgScore) ? '-' : currentData.origin.avgScore.toFixed(2)

          var tooolTitleStyle = `color: rgba(255, 255, 255, 0.7); line-height: 1.5; font-size: 14px; word-wrap: break-word; font-weight: normal;`
          var itemsStyle = `display: flex; justify-content: space-between; flex-direction: row; color: rgba(255, 255, 255, 0.7); font-size: 13px; line-height:1.5; position: relative;`
          var toolDotStyle = `position: absolute; top: 50%; margin-top: -2px; width: 4px; height: 4px; display: inline-block; border-radius: 50%;`
          var itemsTitleStyle = ` margin-left:10px`
          var itemsUnitStyle = ` text-align: right; margin-left:10px`

          var titleHtml = `<h3 style="${tooolTitleStyle}">${currentData.origin.name.slice(5)}</h3>`

          var scoreHtml = `<div style="${itemsStyle}">
            <i style="${toolDotStyle} background-color:${chartLegendItems.length > 0 ? chartLegendItems[0].fill : ''}"></i>
            <div style="${itemsUnitStyle}">${chartLegendItems.length > 0 ? chartLegendItems[0].unit : '分'}</div>
            <div style="${itemsTitleStyle}">${scoreCurrent}</div>
          </div>`

          var avgScoreHtml = `<div style="${itemsStyle}">
            <i style="${toolDotStyle} background-color:${chartLegendItems.length > 0 ? chartLegendItems[1].fill : ''}"></i>
            <div style="${itemsUnitStyle}">${chartLegendItems.length > 1 ? chartLegendItems[1].unit : '%'}</div>
            <div style="${itemsTitleStyle}">${avgScoreCurrent}</div>
          </div>`

          tooltipsElement.innerHTML = titleHtml + (chartLegendItems.length > 0 ? avgScoreHtml : '') + (chartLegendItems.length > 1 ? scoreHtml : '')
          tooltipsElement.style.opacity = '1'
          tooltipsElement.style.display = 'inline-block'
          // 画布初始化边距 0 0
          var canvasOffsetLeft = this.$refs.canvasBarLineChart.offsetLeft
          var canvasOffsetTop = this.$refs.canvasBarLineChart.offsetTop
          // 当前位置 x y
          var currentDataX = currentData.x
          var currentDataY = currentData.y
          // 元素中心点
          const EclientWidth = tooltipsElement.clientWidth / 2
          const EclientHeight = tooltipsElement.clientHeight / 2
          // 画布宽高
          const canvasWidth = this.$refs.canvasBarLineChart.clientWidth
          const canvasHeight = this.$refs.canvasBarLineChart.clientHeight
          // 处理边界问题
          if (currentDataX > canvasOffsetLeft && currentDataX < EclientWidth) { // 低于左上角
            tooltipsElement.style.left = 10 + 'px'
            tooltipsElement.style.top = canvasOffsetTop + currentDataY - EclientHeight + 'px'
          } else if (currentDataY > canvasOffsetTop && currentDataX < EclientWidth) {
            // x,y上边和左上角
            tooltipsElement.style.left = canvasOffsetLeft + currentDataX - EclientWidth + 'px'
            tooltipsElement.style.top = 0 + 'px'
          } else if (currentDataY > canvasOffsetTop && currentDataY > canvasHeight - EclientHeight) {
            // 超出Y轴上方
            tooltipsElement.style.left = canvasOffsetLeft + currentDataX - EclientWidth + 'px'
            tooltipsElement.style.top = 0 + 'px'
          } else if (currentDataX > canvasWidth - tooltipsElement.clientWidth && currentDataY > canvasOffsetTop) {
            // 超出右上角
            tooltipsElement.style.left = canvasWidth - tooltipsElement.clientWidth - 20 + 'px'
            tooltipsElement.style.top = currentDataY - EclientHeight + 'px'
          } else if (currentDataX < tooltipsElement.clientWidth && currentDataY > canvasHeight - EclientHeight) {
            tooltipsElement.style.left = canvasOffsetLeft + currentDataX - EclientWidth - 20 + 'px'
            tooltipsElement.style.top = canvasOffsetTop + currentDataY - EclientHeight + 'px'
          } else {
            tooltipsElement.style.left = canvasOffsetLeft + currentDataX - EclientWidth + 'px'
            tooltipsElement.style.top = canvasOffsetTop + currentDataY - EclientHeight + 'px'
          }
        },
        onHide: (ev) => {
          tooltipsElement.style.opacity = '0'
          tooltipsElement.style.display = 'none'
        }
      })
      // 渲染的类型和颜色等设置
      // 柱形图
      this.chart.interval({ sortable: false, startOnZero: false }).position('name*score').color('#6195ff').size(8).style({ radius: [2.5, 2.5, 0] })
      // 折线图
      this.chart.line({ sortable: false, generatePoints: true, startOnZero: false, connectNulls: false }).position('name*avgScore').color('#f9bb4b').shape('smooth').size(3)
      this.chart.point({ sortable: false, generatePoints: true }).position('name*avgScore').size(3).style('around', {
        fill: '#f9bb4b',
        stroke: '#f9bb4b',
        lineWidth: 3
      })
      // 平移
      if (chartBaseData.chartAllData.length > 7) {
        this.chart.interaction('pan', {
          onStart(ev) {
            _this.chart.repaint()
          },
          onProcess(ev) {
            _this.chart.repaint()
          },
          onEnd(ev) {
            _this.chart.repaint()
          }
        })
      }
      // this.chart.animate({ line: false, interval: false })
      // 渲染画布
      this.chart.render()
    },
    // 画布圆角
    fillRoundRect(x, y, r, cxt, marker, width = 13, height = 8, radius = 2, fillColor) {
      // 圆的直径必然要小于矩形的宽高
      if (2 * radius > width || 2 * radius > height) { return false }
      const sx = 8
      const sy = -5
      cxt.save()
      cxt.translate(sx, sy)
      // 绘制圆角矩形的各个边
      cxt.beginPath(0)
      // 从右下角顺时针绘制，弧度从0到1/2PI
      cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2)
      // 矩形下边线
      cxt.lineTo(radius, height)
      // 左下角圆弧，弧度从1/2PI到PI
      cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)
      // 矩形左边线
      cxt.lineTo(0, radius)
      // 左上角圆弧，弧度从PI到3/2PI
      cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2)
      // 上边线
      cxt.lineTo(width - radius, 0)
      // 右上角圆弧
      cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2)
      // 右边线
      cxt.lineTo(width, height - radius)
      cxt.closePath()
      cxt.fillStyle = fillColor || '' // 若是给定了值就用给定的值否则给予默认值
      cxt.fill()
      cxt.restore()
    },
    // 图例数据
    chartLegendData(baseLegend) {
      if (!baseLegend) return
      // 自定义图例内容以及交互行为
      const baseLegendObj = baseLegend
      const colorMap = {
        score: '#6195ff',
        avgScore: '#f9bb4b'
      }
      const legendItems = []
      for (const key in baseLegendObj) {
        baseLegendObj[key].fill = key === 'score' ? colorMap.score : colorMap.avgScore
        baseLegendObj[key].marker = this.fillRoundRect
        legendItems.push(baseLegendObj[key])
      }
      // console.log('legendItems===', legendItems)
      return legendItems
    },
    // Y轴刻度数据
    chartTicksLineData(yLineData) {
      if (!Array.isArray(yLineData) || !yLineData.length) return
      // 左侧刻度
      const tickCounts = 5 // 5个刻度线
      const yTicksArr = [] // 平均刻度数组
      let yLinePadding = 20 // 左侧默认刻度占的字符串长度，每新增一个长度就+6
      let yCeilMax = 0 // 最大值
      let yFloorMin = 0 // 最小值
      if (Array.isArray(yLineData) && yLineData.length) {
        const regZero = /^0+$/g
        let leftValueArr = []
        if (regZero.test(yLineData.join(''))) { // 值都为0的边界情况
          yCeilMax = 1
          yFloorMin = 0
          yLinePadding = 44
        } else {
          // 先过滤数值
          leftValueArr = [...new Set(yLineData)].map((item) => {
            if (item) return item
          }).filter(Boolean)
          // 重新计算最大最小值
          yCeilMax = Math.ceil(Math.max(...leftValueArr))
          yFloorMin = Math.floor(Math.min(...leftValueArr))
          // 处理最小值要大于0的情况
          if (isNaN(yCeilMax) || yCeilMax <= 0) { yCeilMax = 1 }
          if (isNaN(yFloorMin) || yFloorMin <= 0) { yFloorMin = 0 }
          // 最大最小值相等的边界情况
          if (yCeilMax === yFloorMin) {
            if (yFloorMin === 0) {
              yCeilMax = 1
              yFloorMin = 0
            } else if (yFloorMin > 0 && yFloorMin < 10) { // 0到10的情况
              yCeilMax += 1
              yFloorMin -= 1
            } else if (yFloorMin >= 10 && yFloorMin < 100) { // 00到100的情况
              yCeilMax += 10
              yFloorMin -= 10
            } else if (yFloorMin >= 100) { // 大于100采用幂运算
              const len = Math.pow(10, String(yFloorMin).length - 1)
              yCeilMax += len
              yFloorMin -= len
            }
          }
        }
        // console.log('leftValueArr===', leftValueArr)
        // 平均刻度
        const avgLeftCeil = (yCeilMax - yFloorMin) / (tickCounts - 1)
        for (let index = 0; index < tickCounts; index++) {
          yTicksArr.push(yFloorMin + (index * avgLeftCeil))
        }
        yTicksArr.reverse() // 翻转排序
        // 刻度值字符串长度处理
        if (leftValueArr.length) {
          const leftMaxLength = yTicksArr.slice(0)
          leftMaxLength.sort((a, b) => {
            return (a.toString()).length < (b.toString()).length
          })
          const leftMaxNumLegth = (leftMaxLength[0].toFixed(2)).length
          yLinePadding = leftMaxNumLegth * 6 + 20
        }
      }
      // console.log('yTicksArr===', yTicksArr, 'yLinePadding===', yLinePadding, 'yCeilMax===', yCeilMax, 'yFloorMin===', yFloorMin)
      const ticksLineObj = {
        tickCounts: tickCounts,
        yTicksArr: yTicksArr,
        yCeilMax: yCeilMax,
        yFloorMin: yFloorMin,
        yLinePadding: yLinePadding
      }
      return ticksLineObj
    },
    // 处理符合图表的数据
    chartDataOptimised(chartData) {
      if (!Array.isArray(chartData) || !chartData.length) return
      const chartAllData = []
      const xLineData = []
      const rightLineData = []
      const leftLineData = []
      if (chartData.length) {
        chartData.forEach((obj) => {
          const chartColData = {}
          if (obj.avgScore) {
            if (obj.avgScore === '-') {
              chartColData.avgScore = null
            } else {
              chartColData.avgScore = Number(obj.avgScore)
              rightLineData.push(Number(obj.avgScore))
            }
          }
          if (obj.score) {
            if (obj.score === '-') {
              chartColData.score = null
            } else {
              chartColData.score = Number(obj.score)
              leftLineData.push(Number(obj.score))
            }
          }
          if (obj.name) {
            if (obj.name === '-') {
              chartColData.name = null
            } else {
              chartColData.name = obj.name
              xLineData.push(obj.name)
            }
          }
          chartAllData.push(chartColData)
        })
      }
      // 数据根据日期排序
      xLineData.sort((a, b) => {
        return Date.parse(a) - Date.parse(b)
      })
      chartAllData.sort((a, b) => {
        return Date.parse(a.name) - Date.parse(b.name)
      })
      // 输出一个集合对象值
      const chartAllObj = {
        chartAllData: chartAllData,
        xLineData: xLineData,
        rightLineData: rightLineData,
        leftLineData: leftLineData
      }
      return chartAllObj
    }
  }
}
</script>

<style  lang="less" scoped>
.chart-wrapper{
    padding: 20px;
  .chart-box{
    position: relative;
    padding: 10px 0;
    background-color: #2e3036;
    border-radius: 10px;
    .f2-tooltips{
      z-index: 99;
      pointer-events: none;
      opacity: 0;
      position: absolute;
      border-radius: 16px;
      padding: 16px;
      text-align: left;
      background-color: rgba(70, 74, 86, 0.9);
    }
  }
}
</style>
