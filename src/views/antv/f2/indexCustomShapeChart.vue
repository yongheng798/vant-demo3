<!--
 * @Author: your name
 * @Date: 2020-07-15 12:24:24
 * @LastEditTime: 2020-07-15 14:37:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexCustomShapeChart.vue
-->
<template>
  <div class="chart-container-box">
    <CustomBaseChart />
    <CustomGraphicChart />
  </div>
</template>

<script>
import CustomBaseChart from '@/components/antv/f2/CustomBaseChart'
import CustomGraphicChart from '@/components/antv/f2/CustomGraphicChart'

export default {
  name: 'IndexCustomShapeChart',
  components: {
    CustomBaseChart,
    CustomGraphicChart
  }
}
</script>

<style lang="less" scoped>

</style>
