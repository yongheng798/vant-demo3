<!--
 * @Author: your name
 * @Date: 2020-07-13 12:29:40
 * @LastEditTime: 2020-07-15 08:55:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexBarColumnChart.vue
-->

<template>
  <div class="chart-container-box">
    <BarColumnChart />
    <BarStackChart />
    <BarColumnPanChart :bar-line-chart="barLineChart" :base-legend-obj="baseLegendObj" />
  </div>
</template>

<script>
import BarColumnChart from '@/components/antv/f2/BarColumnChart'
import BarStackChart from '@/components/antv/f2/BarStackChart'
import BarColumnPanChart from '@/components/antv/f2/BarColumnPanChart'
import { barLineChart, baseLegendObj } from '../../../api/json/barLinePanChart'
export default {
  name: 'IndexBarColumnChart',
  components: {
    BarColumnChart,
    BarStackChart,
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
