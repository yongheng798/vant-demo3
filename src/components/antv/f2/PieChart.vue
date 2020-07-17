<!--
 * @Author: your name
 * @Date: 2020-07-08 12:30:55
 * @LastEditTime: 2020-07-17 09:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\BarLinethis.chart.vue
-->
<template>
  <div class="chart-wrapper">
    <h3>饼图</h3>
    <canvas :id="`pieChart${Uid}`" />
  </div>
</template>

<script>

export default {
  name: 'PieChart',
  props: {
    childData: {
      type: Object,
      // required: true,
      default: () => {}
    }
  },
  data() {
    return {
      Uid: (new Date()).getTime(),
      chart: null,
      chartData: [{
        const: 'const',
        type: '交通出行',
        money: 51.39
      }, {
        const: 'const',
        type: '饮食',
        money: 356.68
      }, {
        const: 'const',
        type: '生活日用',
        money: 20.00
      }, {
        const: 'const',
        type: '住房缴费',
        money: 116.53
      }]
    }
  },
  watch: {},
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.$nextTick(() => {
        this.createChart(this.chartData)
      })
    },
    createChart(chartData) {
      if (!chartData.length) return
      if (this.chart) {
        this.this.chart.clear()
        this.this.chart.init()
      }
      // 创建图形
      this.chart = new this.$F2.Chart({
        id: 'pieChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })
      this.chart.source(chartData)

      this.$nextTick(() => {
        this.chart.repaint()
      })

      this.chart.coord('polar', {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.5
      })
      this.chart.axis(false)
      this.chart.legend(false)
      this.chart.tooltip(false)
      this.chart.guide()
        .html({
          position: ['50%', '50%'],
          html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
        })
      this.chart.interval()
        .position('const*money')
        .adjust('stack')
        .color('type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14'])
      this.chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: '￥' + data.money,
            fill: '#343434',
            fontWeight: 'bold'
          }
        },
        label2: function label2(data) {
          return {
            text: data.type,
            fill: '#999'
          }
        },
        onClick: function onClick(ev) {
          const data = ev.data
          if (data) {
            document.getElementById('title').innerText = data.type
            document.getElementById('money').innerText = data.money
            // $('#title').text(data.type)
            // $('#money').text(data.money)
          }
        }
      })
      this.chart.render()
    }
  }
}
</script>

<style scoped>

</style>
