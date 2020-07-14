<!--
 * @Author: your name
 * @Date: 2020-07-14 17:04:41
 * @LastEditTime: 2020-07-14 17:25:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\f2\indexTooltipChart.vue
-->
<template>
  <div class="chart-container-box">
    <h3>========tooltips============</h3>
    <TooltipShowChart />
    <TooltipXtipChart />
  </div>
</template>

<script>
import TooltipShowChart from '@/components/antv/f2/TooltipShowChart'
import TooltipXtipChart from '@/components/antv/f2/TooltipXtipChart'

export default {
  name: 'IndexTooltipChart',
  components: {
    TooltipShowChart,
    TooltipXtipChart
  }
}
</script>

<style lang="less" scoped>

</style>
