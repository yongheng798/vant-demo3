<!--
 * @Author: your name
 * @Date: 2020-07-13 11:49:03
 * @LastEditTime: 2020-07-13 11:49:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexAreaChart.vue
-->

<template>
  <div class="chart-container-box">
    <AreaStackedChart />
  </div>
</template>

<script>
import AreaStackedChart from '@/components/antv/f2/AreaStackedChart'

export default {
  name: 'IndexAreaChart',
  components: {
    AreaStackedChart
  }
}
</script>

<style lang="less" scoped>

</style>
