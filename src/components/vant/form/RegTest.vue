<!--
 * @Author: your name
 * @Date: 2020-07-17 10:48:45
 * @LastEditTime: 2020-07-17 14:24:02
 * @LastEditors: Please set LastEditors
 * @Description: 正则校验
 * @FilePath: \vant-demo3\src\components\vant\form\RegTest.vue
-->
<template>
  <div class="van-field">
    <!-- 通过 pattern 进行正则校验 -->
    <van-field
      v-model="value1"
      name="pattern"
      placeholder="正则校验"
      :rules="[{ pattern, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 进行函数校验 -->
    <van-field
      v-model="value2"
      name="validator"
      placeholder="函数校验"
      :rules="[{ validator, message: '请输入正确内容' }]"
    />
    <!-- 通过 validator 进行异步函数校验 -->
    <van-field
      v-model="value3"
      name="asyncValidator"
      placeholder="异步函数校验"
      :rules="[{ validator: asyncValidator, message: '请输入正确内容' }]"
    />
  </div>
</template>

<script>
import { Field, Toast } from 'vant'
export default {
  name: 'RegTest',
  components: {
    [Field.name]: Field,
    [Toast.name]: Toast
  },
  data() {
    return {
      value: 1,
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/
    }
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val)
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    }
  }
}
</script>
