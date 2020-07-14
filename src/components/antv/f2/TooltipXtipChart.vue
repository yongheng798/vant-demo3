<!--
 * @Author: your name
 * @Date: 2020-07-14 17:08:54
 * @LastEditTime: 2020-07-14 17:13:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\TooltipXtipChart.vue
-->

<template>
  <div class="chart-containner">
    <h3>Tooltip X轴提示信息</h3>
    <canvas :id="`TooltipXtipChart${Uid}`" />
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'TooltipXtipChart',
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
        this.createTooltipXtipChart()
      })
    },
    createTooltipXtipChart() {
      const data = [{
        year: '2010',
        type: 'Thailand',
        value: 1645304
      }, {
        year: '2011',
        type: 'Thailand',
        value: 1457795
      }, {
        year: '2012',
        type: 'Thailand',
        value: 2453717
      }, {
        year: '2013',
        type: 'Thailand',
        value: 2457057
      }, {
        year: '2014',
        type: 'Thailand',
        value: 1880007
      }, {
        year: '2015',
        type: 'Thailand',
        value: 1913002
      }, {
        year: '2016',
        type: 'Thailand',
        value: 1808625
      }, {
        year: '2010',
        type: 'ASEAN',
        value: 1456866
      }, {
        year: '2011',
        type: 'ASEAN',
        value: 1536834
      }, {
        year: '2012',
        type: 'ASEAN',
        value: 1784263
      }, {
        year: '2013',
        type: 'ASEAN',
        value: 1982417
      }, {
        year: '2014',
        type: 'ASEAN',
        value: 2104870
      }, {
        year: '2015',
        type: 'ASEAN',
        value: 1983965
      }, {
        year: '2016',
        type: 'ASEAN',
        value: 1908434
      }]
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'TooltipXtipChart' + this.Uid,
        // pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 'auto', 16],
        width: window.innerWidth - 20,
        height: 300
      })

      chart.source(data, {
        year: {
          range: [0.16, 0.95]
        },
        value: {
          tickInterval: 500000,
          formatter: function formatter(val) {
            return String(Math.floor(val * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
        }
      })
      chart.axis('value', {
        label: function label(text, index, total) {
          const cfg = {
            textAlign: 'start',
            top: true,
            text
          }
          if (index === total - 1) {
            cfg.text = cfg.text + ' vehicles'
          }
          return cfg
        }
      })

      chart.guide().rect({
        start: ['0%', '0%'],
        end: ['12%', '99%'],
        style: {
          lineWidth: 1,
          stroke: '#fff',
          fill: '#fff',
          opacity: 1
        }
      })
      chart.legend({
        marker: 'square'
      })
      // tooltip 与图例结合
      chart.tooltip({
        showXTip: true,
        xTipBackground: {
          stroke: '#fff',
          lineWidth: 1,
          radius: 3
        },
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart.get('legendController').legends.top[0]
          const tooltipItems = obj.items
          const legendItems = legend.items
          const map = {}
          legendItems.forEach(function(item) {
            map[item.name] = _.clone(item)
          })
          tooltipItems.forEach(function(item) {
            const name = item.name
            const value = item.value
            if (map[name]) {
              map[name].value = value
            }
          })
          legend.setItems(_.values(map))
        },
        onHide: function onHide() {
          const legend = chart.get('legendController').legends.top[0]
          legend.setItems(chart.getLegendItems().country)
        }
      })
      chart.interval()
        .position('year*value')
        .color('type', ['#ab5787', '#51b2e5'])
        .adjust({
          type: 'dodge',
          marginRatio: 0.3
        })
      chart.render()
    }
  }
}
</script>
