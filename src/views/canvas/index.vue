<!--
 * @Author: your name
 * @Date: 2020-07-12 12:02:18
 * @LastEditTime: 2020-07-12 17:52:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\canvas\index.vue
-->
<template>
  <div class="container-canvas-demo">
    <demo1 />
    <demo2 />
    <demoDrawDrid />
    <demoAxis />
  </div>
</template>

<script>
import demo1 from '@/views/canvas/demo1'
import demo2 from '@/views/canvas/demo2'
import demoDrawDrid from '@/views/canvas/demoDrawDrid'

import demoAxis from '@/views/canvas/demoAxis'

export default {
  name: 'Index',
  components: {
    demo1,
    demo2,
    demoDrawDrid,
    demoAxis
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
