<!--
 * @Author: your name
 * @Date: 2020-07-13 14:17:43
 * @LastEditTime: 2020-07-13 14:29:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexPieChart.vue
-->

<template>
  <div class="chart-container-box">
    <PieBaseChart />
    <PieChart />
  </div>
</template>

<script>
import PieBaseChart from '@/components/antv/f2/PieBaseChart'
import PieChart from '@/components/antv/f2/PieChart'

export default {
  name: 'IndexPieChart',
  components: {
    PieBaseChart,
    PieChart

  }
}
</script>

<style lang="less" scoped>

</style>
