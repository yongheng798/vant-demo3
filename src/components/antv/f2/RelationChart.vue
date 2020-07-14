<!--
 * @Author: your name
 * @Date: 2020-07-14 15:45:48
 * @LastEditTime: 2020-07-14 15:48:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\antv\f2\RelationChart.vue
-->
<template>
  <div class="chart-containner">
    <h3>矩形式树图</h3>
    <canvas :id="`relationChart${Uid}`" />
  </div>
</template>

<script>
import '@antv/data-set'
const DataSet = window.DataSet

const data = {
  name: 'root',
  children: [{
    name: '分类 1',
    value: 560
  }, {
    name: '分类 2',
    value: 500
  }, {
    name: '分类 3',
    value: 150
  }, {
    name: '分类 4',
    value: 140
  }, {
    name: '分类 5',
    value: 115
  }, {
    name: '分类 6',
    value: 95
  }, {
    name: '分类 7',
    value: 90
  }, {
    name: '分类 8',
    value: 75
  }, {
    name: '分类 9',
    value: 98
  }, {
    name: '分类 10',
    value: 60
  }, {
    name: '分类 11',
    value: 45
  }, {
    name: '分类 12',
    value: 40
  }, {
    name: '分类 13',
    value: 40
  }, {
    name: '分类 14',
    value: 35
  }, {
    name: '分类 15',
    value: 40
  }, {
    name: '分类 16',
    value: 40
  }, {
    name: '分类 17',
    value: 40
  }, {
    name: '分类 18',
    value: 30
  }, {
    name: '分类 19',
    value: 28
  }, {
    name: '分类 20',
    value: 16
  }]
}
const dv = new DataSet.DataView()
dv.source(data, {
  type: 'hierarchy'
}).transform({
  field: 'value',
  type: 'hierarchy.treemap',
  tile: 'treemapResquarify',
  as: ['x', 'y']
})
const nodes = dv.getAllNodes()
nodes.map(function(node) {
  node.name = node.data.name
  node.value = node.data.value
  return node
})

export default {
  name: 'RelationChart',
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
        this.createrelationChart()
      })
    },
    createrelationChart() {
      // Step 1: 创建 Chart 对象
      const chart = new this.$F2.Chart({
        id: 'relationChart' + this.Uid,
        pixelRatio: window.devicePixelRatio, // 指定分辨率
        padding: ['auto', 'auto', 90, 'auto'],
        width: window.innerWidth - 20,
        height: 300
      })

      // console.log('chart===', chart)
      // Step 2: 载入数据源
      chart.source(nodes)
      this.$nextTick(() => {
        chart.repaint()
      })
      chart.scale({
        value: {
          nice: false
        }
      })
      chart.axis(false)
      chart.legend(false)
      chart.tooltip(false)
      chart.polygon()
        .position('x*y')
        .color('name')
        .shape('labeledPolygon')
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })

      chart.render()
      // Step 4: 渲染图表
    }
  }
}
</script>
