<!--
 * @Author: your name
 * @Date: 2020-07-13 14:38:32
 * @LastEditTime: 2020-07-13 14:39:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexRadarChart.vue
-->

<template>
  <div class="chart-container-box">
    <RadarBaseChart />
  </div>
</template>

<script>
import RadarBaseChart from '@/components/antv/f2/RadarBaseChart'

export default {
  name: 'IndexRadarChart',
  components: {
    RadarBaseChart
  }
}
</script>

<style lang="less" scoped>

</style>
