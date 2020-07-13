<!--
 * @Author: your name
 * @Date: 2020-07-13 10:56:34
 * @LastEditTime: 2020-07-13 11:29:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexLineChart.vue
-->
<template>
  <div class="chart-container-box">
    <BaseLineChart />
    <LineSmoothChart />
  </div>
</template>

<script>
import BaseLineChart from '@/components/antv/f2/BaseLineChart'
import LineSmoothChart from '@/components/antv/f2/LineSmoothChart'

export default {
  name: 'IndexLineChart',
  components: {
    BaseLineChart,
    LineSmoothChart
  }
}
</script>

<style lang="less" scoped>

</style>
