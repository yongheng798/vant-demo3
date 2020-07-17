<!--
 * @Author: your name
 * @Date: 2020-07-17 11:38:21
 * @LastEditTime: 2020-07-17 11:45:13
 * @LastEditors: Please set LastEditors
 * @Description: 表单常用类型整理
 * @FilePath: \vant-demo3\src\components\vant\form\FormTypes.vue
-->
<template>
  <div class="form-types-wrap">
    <!-- 表单类型 -->
    <!-- input -->
    <van-field
      v-model="value1"
      name="pattern"
      placeholder="input"
    />
    <!-- switch -->
    <van-field name="switch" label="开关">
      <template #input>
        <van-switch v-model="switchChecked" size="20" />
      </template>
    </van-field>
    <van-field name="checkbox" label="复选框">
      <template #input>
        <van-checkbox v-model="checkbox" shape="square" />
      </template>
    </van-field>
    <!--  -->
    <van-field name="checkboxGroup" label="复选框组">
      <template #input>
        <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
          <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
          <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
    <!--  -->
    <van-field name="stepper" label="步进器">
      <template #input>
        <van-stepper v-model="stepper" />
      </template>
    </van-field>
    <!-- 评分 -->
    <van-field name="rate" label="评分">
      <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <!-- 滑块 -->
    <van-field name="slider" label="滑块">
      <template #input>
        <van-slider v-model="slider" />
      </template>
    </van-field>
    <!-- 上传 -->
    <van-field name="uploader" label="文件上传">
      <template #input>
        <van-uploader v-model="uploader" />
      </template>
    </van-field>
  </div>
</template>

<script>
import { Field, Button, Switch, Checkbox, CheckboxGroup, Stepper, Rate, Slider, Uploader, Toast } from 'vant'
export default {
  name: 'FormTypes',
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Switch.name]: Switch,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Stepper.name]: Stepper,
    [Rate.name]: Rate,
    [Slider.name]: Slider,
    [Uploader.name]: Uploader,
    [Toast.name]: Toast
  },
  data() {
    return {
      value1: '',
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      stepper: 1,
      rate: 3,
      slider: 50,
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }]
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
