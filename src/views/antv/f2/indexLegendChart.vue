<!--
 * @Author: your name
 * @Date: 2020-07-14 17:23:45
 * @LastEditTime: 2020-07-14 17:50:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexLegendChart.vue
-->
<template>
  <div class="chart-container-box">
    <h3>========图例============</h3>
    <LegendChart />
    <LegendPieChart />
  </div>
</template>

<script>
import LegendChart from '@/components/antv/f2/LegendChart'
import LegendPieChart from '@/components/antv/f2/LegendPieChart'

export default {
  name: 'IndexLegendChart',
  components: {
    LegendChart,
    LegendPieChart
  }
}
</script>

<style lang="less" scoped>

</style>
