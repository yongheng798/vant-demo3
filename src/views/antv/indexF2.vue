<!--
 * @Author: your name
 * @Date: 2020-07-08 14:32:50
 * @LastEditTime: 2020-07-09 16:37:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\indexF2.vue
-->
<template>
  <div class="constainer">
    <h3>基本图形</h3>
    <BaseChart />
    <h3>f2柱形图</h3>
    <BarLineChart />
    <h3>饼图</h3>
    <PieChart />
  </div>
</template>

<script>
import BarLineChart from '@/components/antv/f2/BarLineChart'
import BaseChart from '@/components/antv/f2/BaseChart'
import PieChart from '@/components/antv/f2/PieChart'

export default {
  name: 'IndexF2',
  components: {
    BarLineChart,
    BaseChart,
    PieChart
  }
}
</script>

<style lang="less" scoped>
.constainer{
  margin: auto;
}
</style>
