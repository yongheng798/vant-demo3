<!--
 * @Author: your name
 * @Date: 2020-07-15 08:59:39
 * @LastEditTime: 2020-07-15 09:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexAntVF2Test.vue
-->

<template>
  <div class="chart-container-box">
    <BarColumnPanChart :bar-line-chart="barLineChart" :base-legend-obj="baseLegendObj" />
  </div>
</template>

<script>
import BarColumnPanChart from '@/components/antv/f2/BarColumnPanChart'
import { barLineChart, baseLegendObj } from '../../../api/json/barLinePanChart'
export default {
  name: 'IndexAntVF2Test',
  components: {
    BarColumnPanChart
  },
  data() {
    return {
      barLineChart: barLineChart,
      baseLegendObj: baseLegendObj
    }
  }
}
</script>

<style lang="less" scoped>

</style>
