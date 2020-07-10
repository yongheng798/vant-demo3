<!--
 * @Author: your name
 * @Date: 2020-07-08 14:32:50
 * @LastEditTime: 2020-07-10 19:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\antv\indexF2.vue
-->
<template>
  <div class="constainer">
    <h3>基本图形</h3>
    <ChartBase />
    <h3>f2柱形图</h3>
    <ChartBarLine />
    <h3>饼图</h3>
    <ChartPie />
    <h3>双柱形图</h3>
    <ChartBarDodge />
  </div>
</template>

<script>
import ChartBarLine from '@/components/antv/f2/ChartBarLine'
import ChartBase from '@/components/antv/f2/ChartBase'
import ChartPie from '@/components/antv/f2/ChartPie'
import ChartBarDodge from '@/components/antv/f2/ChartBarDodge'

export default {
  name: 'IndexF2',
  components: {
    ChartBarLine,
    ChartBase,
    ChartPie,
    ChartBarDodge
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
