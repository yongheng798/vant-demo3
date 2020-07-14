<!--
 * @Author: your name
 * @Date: 2020-07-14 17:48:05
 * @LastEditTime: 2020-07-14 18:20:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\LegendPieChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>饼图 图例自定义</h3>
    <canvas :id="`LegendPieChart${Uid}`" />
  </div>
</template>

<script>

export default {
  name: 'LegendPieChart',
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
        this.createLegendPieChart()
      })
    },
    createLegendPieChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'LegendPieChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        // padding: ['auto', 'auto', 'auto', 16],
        width: window.innerWidth - 20,
        height: 300
      })

      const data = [{
        assetType: '债券资产',
        percent: 73.76,
        const: 'const'
      }, {
        assetType: '其他资产',
        percent: 22.11,
        const: 'const'
      }, {
        assetType: '股票资产',
        percent: 2.20,
        const: 'const'
      }, {
        assetType: '现金资产',
        percent: 1.93,
        const: 'const'
      }]

      const colorMap = {
        债券资产: '#1890FF',
        其他资产: '#2FC25B',
        股票资产: '#FACC14',
        现金资产: '#F04864'
      }
      // 设置图例项的内容
      const legendItems = []
      data.forEach(function(obj) {
        const item = {
          name: obj.assetType,
          value: ' ' + obj.percent + '%',
          marker: {
            // symbol: 'square',
            fill: colorMap[obj.assetType]
            // r: 10
          }
        }
        legendItems.push(item)
      })
      console.log('legendItems===', legendItems)
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + '%'
          }
        }
      })
      chart.coord('polar', {
        transposed: true,
        r: 0.85
      })
      chart.legend({
        position: 'bottom',
        custom: true,
        align: 'center',
        itemWidth: null, // 图例项按照实际宽度渲染
        items: legendItems,
        nameStyle: {
          fill: '#808080'
        }, // 图例项 key 值文本样式
        valueStyle: {
          fill: '#333',
          fontWeight: 'bold' // 图例项 value 值文本样式
        }
      })
      chart.axis(false)
      chart.interval()
        .position('const*percent')
        .color('assetType', function(val) {
          return colorMap[val]
        })
        .adjust('stack')
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })
      chart.render()
    },
    // 画布圆角
    fillRoundRect(x, y, r, cxt, marker, width = 13, height = 8, fillColor) {
      // 圆的直径必然要小于矩形的宽高
      if (2 * r > width || 2 * r > height) { return false }
      const sx = 8
      const sy = -5
      cxt.save()
      cxt.translate(sx, sy)
      // 绘制圆角矩形的各个边
      cxt.beginPath(0)
      // 从右下角顺时针绘制，弧度从0到1/2PI
      cxt.arc(width - r, height - r, r, 0, Math.PI / 2)
      // 矩形下边线
      cxt.lineTo(r, height)
      // 左下角圆弧，弧度从1/2PI到PI
      cxt.arc(r, height - r, r, Math.PI / 2, Math.PI)
      // 矩形左边线
      cxt.lineTo(0, r)
      // 左上角圆弧，弧度从PI到3/2PI
      cxt.arc(r, r, r, Math.PI, Math.PI * 3 / 2)
      // 上边线
      cxt.lineTo(width - r, 0)
      // 右上角圆弧
      cxt.arc(width - r, r, r, Math.PI * 3 / 2, Math.PI * 2)
      // 右边线
      cxt.lineTo(width, height - r)
      cxt.closePath()
      cxt.fillStyle = fillColor || '' // 若是给定了值就用给定的值否则给予默认值
      cxt.fill()
      cxt.restore()
    }
  }
}
</script>
