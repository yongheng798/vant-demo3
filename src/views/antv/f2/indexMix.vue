<!--
 * @Author: your name
 * @Date: 2020-07-08 14:32:50
 * @LastEditTime: 2020-07-17 09:23:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\indexF2.vue
-->
<template>
  <div class="constainer">
    <component
      :is="isShowItems(childData)"
      :child-data="childData"
      :bar-line-chart="barLineChart"
      :base-legend-obj="baseLegendObj"
    />
  </div>
</template>

<script>

import BaseChart from '@/components/antv/f2/BaseChart'
import PieChart from '@/components/antv/f2/PieChart'
import BarLineChart from '@/components/antv/f2/BarLineChart'
import BarDodgeChart from '@/components/antv/f2/BarDodgeChart'

import { barLineChart, baseLegendObj } from '../../../api/json/barLineChart'

export default {
  name: 'IndexMix',
  components: {
    BaseChart: BaseChart,
    PieChart: PieChart,
    BarLineChart: BarLineChart,
    BarDodgeChart: BarDodgeChart
  },
  props: {
    childData: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      barLineChart: barLineChart,
      baseLegendObj: baseLegendObj
    }
  },
  methods: {
    isShowItems(childData) {
      // console.log('childData===', childData)
      // if (childData.isShow && childData.isShow !== '') {
      //   return childData.isShow
      // }
      return childData.showType
    },
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
