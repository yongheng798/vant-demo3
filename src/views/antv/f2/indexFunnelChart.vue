<!--
 * @Author: your name
 * @Date: 2020-07-13 14:53:20
 * @LastEditTime: 2020-07-13 15:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexFunnelChart.vue
-->

<template>
  <div class="chart-container-box">
    <FunnelChart />
    <FunnelDownChart />
  </div>
</template>

<script>
import FunnelChart from '@/components/antv/f2/FunnelChart'
import FunnelDownChart from '@/components/antv/f2/FunnelDownChart'
export default {
  name: 'IndexFunnelChart',
  components: {
    FunnelChart,
    FunnelDownChart
  }
}
</script>

<style lang="less" scoped>

</style>
