<!--
 * @Author: your name
 * @Date: 2020-07-13 14:59:25
 * @LastEditTime: 2020-07-13 15:21:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\FunnelDownChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>漏斗图 倒立</h3>
    <canvas :id="`FunnelDownChart${Uid}`" ref="FunnelDownChart" />
  </div>
</template>

<script>
export default {
  name: 'FunnelDownChart',
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
        this.createFunnelDownChart()
      })
    },
    createFunnelDownChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'FunnelDownChart' + this.Uid,
        pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', '100', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })
      const donwData = [
        { action: '浏览网站', pv: 50000, percent: 1 },
        { action: '放入购物车', pv: 35000, percent: 0.7 },
        { action: '生成订单', pv: 25000, percent: 0.5 },
        { action: '支付订单', pv: 15000, percent: 0.3 },
        { action: '完成交易', pv: 8000, percent: 0.16 }
      ]
      // Step 2: 载入数据源
      chart.source(donwData)
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.axis(false)
      // 倒立
      chart.coord({
        transposed: true,
        scale: [1, -1]
      })
      chart.legend(true)
      chart.intervalLabel({
        offsetX: 10,
        label: (donwData, color) => {
          return {
            text: donwData.action,
            fill: color
          }
        }
      })

      // 提示文案
      donwData.forEach(function(obj) {
        chart.guide().text({
          position: [obj.action, 0.5],
          content: (obj.percent * 100).toFixed(0) + '%',
          style: {
            textBaseline: 'middle',
            textAlign: 'center',
            fill: '#fff'
          }
        })
      })

      chart.interval()
        .position('action*percent')
        .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
        .adjust('symmetric')
        .style({
          lineWidth: 2,
          stroke: '#fff'
        })
        .shape('pyramid')

      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
