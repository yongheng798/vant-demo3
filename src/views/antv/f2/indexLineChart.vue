<!--
 * @Author: your name
 * @Date: 2020-07-13 10:56:34
 * @LastEditTime: 2020-07-15 11:18:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexLineChart.vue
-->
<template>
  <div class="chart-container-box">
    <BaseLineChart />
    <LineSmoothChart />
    <LineSmoothMultipleChart />
    <LinePanChart />
  </div>
</template>

<script>
import BaseLineChart from '@/components/antv/f2/BaseLineChart'
import LineSmoothChart from '@/components/antv/f2/LineSmoothChart'
import LineSmoothMultipleChart from '@/components/antv/f2/LineSmoothMultipleChart'
import LinePanChart from '@/components/antv/f2/LinePanChart'

export default {
  name: 'IndexLineChart',
  components: {
    BaseLineChart,
    LineSmoothChart,
    LineSmoothMultipleChart,
    LinePanChart
  }
}
</script>

<style lang="less" scoped>

</style>
