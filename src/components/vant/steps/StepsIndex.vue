<!--
 * @Author: your name
 * @Date: 2020-07-20 15:36:16
 * @LastEditTime: 2020-07-20 16:14:18
 * @LastEditors: Please set LastEditors
 * @Description: 步骤条
 * @FilePath: \vant-demo3\src\components\vant\steps\index.vue
-->
<template>
  <div class="steps-wrap-box">
    <van-steps :active="active" @click-step="handleClickStep">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
  </div>
</template>

<script>
import { Step, Steps } from 'vant'
export default {
  name: 'Steps',
  components: {
    [Step.name]: Step,
    [Steps.name]: Steps
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    handleClickStep(index) {
      this.active = index
    }
  }
}
</script>

<style lang="less" scoped>
.steps-wrap-box{
  padding: 10px;
}
</style>
