<!--
 * @Author: your name
 * @Date: 2020-07-17 11:24:41
 * @LastEditTime: 2020-07-17 11:35:07
 * @LastEditors: Please set LastEditors
 * @Description: Form表单插槽
 * @FilePath: \vant-demo3\src\components\vant\form\FormTemplate.vue
-->
<template>
  <div class="form-container-wrap">
    <van-form validate-first @failed="onFailed">
      <slot name="vanFieldList" />
    </van-form>
  </div>
</template>

<script>
import { Form } from 'vant'
export default {
  name: 'RegTest',
  components: {
    [Form.name]: Form
  },
  data() {
    return {
    }
  },
  methods: {
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    }
  }
}
</script>
