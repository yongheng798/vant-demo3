<!--
 * @Author: your name
 * @Date: 2020-07-08 14:32:50
 * @LastEditTime: 2020-07-14 18:28:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\indexF2.vue
-->
<template>
  <div class="constainer">
    <van-tabs type="card" animated swipeable>
      <van-tab title="折线图">
        <indexLineChart />
      </van-tab>
      <van-tab title="面积图">
        <indexAreaChart />
      </van-tab>
      <van-tab title="柱形图">
        <indexBarColumnChart />
      </van-tab>
      <van-tab title="饼图"><indexPieChart /></van-tab>
      <van-tab title="雷达图">
        <indexRadarChart />
      </van-tab>
      <!-- <van-tab title="关系图">
        <indexRelationChart />
      </van-tab> -->
      <van-tab title="漏斗图">
        <indexFunnelChart />
      </van-tab>
      <van-tab title="功能组件">
        <indexTooltipChart />
        <indexLegendChart />
        <indexGuideChart />
      </van-tab>
      <van-tab title="混合图形">
        <indexMix />
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'

import indexLineChart from '@/views/antv/f2/indexLineChart'
import indexAreaChart from '@/views/antv/f2/indexAreaChart'
import indexBarColumnChart from '@/views/antv/f2/indexBarColumnChart'
import indexPieChart from '@/views/antv/f2/indexPieChart'
import indexRadarChart from '@/views/antv/f2/indexRadarChart'
import indexFunnelChart from '@/views/antv/f2/indexFunnelChart'
// import indexRelationChart from '@/views/antv/f2/indexRelationChart'
import indexTooltipChart from '@/views/antv/f2/indexTooltipChart'
import indexLegendChart from '@/views/antv/f2/indexLegendChart'
import indexGuideChart from '@/views/antv/f2/indexGuideChart'

import indexMix from '@/views/antv/f2/indexMix'

export default {
  name: 'IndexF2',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    indexLineChart,
    indexAreaChart,
    indexBarColumnChart,
    indexPieChart,
    indexRadarChart,
    indexFunnelChart,
    // indexRelationChart,
    indexTooltipChart,
    indexLegendChart,
    indexGuideChart,
    indexMix
  },
  data() {
    return {
    }
  },
  methods: {
    // 组件内路由方法
    beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
      console.log('beforeRouteEnter', 'to===', to, 'from===', from, 'next===', next)
    },
    beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
      console.log('beforeRouteUpdate', 'to===', to, 'from===', from, 'next===', next)
    },
    beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
      console.log('beforeRouteLeave', 'to===', to, 'from===', from, 'next===', next)
    }
  }
}
</script>

<style lang="less" scoped>
.constainer{
  margin: auto;
}
</style>
