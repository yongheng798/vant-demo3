<!--
 * @Author: your name
 * @Date: 2020-07-07 20:44:24
 * @LastEditTime: 2020-07-20 12:09:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\vant\form\FormMix.vue
-->
<template>
  <div class="containner">
    <van-form validate-first @failed="onFailed">
      <!-- 表单通用的组件，通过插槽形式加载进来 -->
      <FormTemplate>
        <!-- 表单校验 -->
        <RegTest slot="vanFieldList" />
        <!-- 表单的基本类型 -->
        <FormTypes slot="vanFieldList" />
        <!-- picker 筛选器 -->
        <PickerMix slot="vanFieldList" />
        <!-- 时间、日历选择器 -->
        <DateMix slot="vanFieldList" />
      </FormTemplate>

      <!-- 提交 -->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Button } from 'vant'

import FormTemplate from '@/components/vant/form/FormTemplate'
import RegTest from '@/components/vant/form/RegTest'
import FormTypes from '@/components/vant/form/FormTypes'
import PickerMix from '@/components/vant/picker/PickerMix'
import DateMix from '@/components/vant/date/DateMix'

export default {
  name: 'FormMix',
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    RegTest,
    FormTemplate,
    FormTypes,
    PickerMix,
    DateMix
  },
  data() {
    return {
    }
  },
  watch: {
    // $route: {
    //   handler: (route) => {
    //     if (this.$route.path === '/vant') {
    //       console.log('从vant进来的')
    //     }
    //     // this.redirect = this.$route.query && this.$route.query.redirect
    //   },
    //   immediate: true
    // }
    $route(to, from) {
      if (this.$route.path === '/vant') {
        console.log('从vant进来的')
      }
    }
  },
  mounted() {
    console.log('push===', this.$route)
    if (this.$route.query.classId === '/vant') {
      console.log('从vant进来的')
    }
  },
  methods: {
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
