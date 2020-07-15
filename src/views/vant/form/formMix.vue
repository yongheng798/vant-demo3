<!--
 * @Author: your name
 * @Date: 2020-07-07 20:44:24
 * @LastEditTime: 2020-07-15 15:51:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\vant\form\FormMix.vue
-->
<template>
  <div class="containner">
    <van-form validate-first @failed="onFailed">
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
      <!-- 表单类型 -->
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
      <!-- picker选择器 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="pickerValue"
        label="选择器"
        placeholder="点击选择城市"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="pickerOnConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <!-- 时间 -->
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="time"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showDatetimePicker = true"
      />
      <van-popup v-model="showDatetimePicker" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="datetimeOnConfirm"
          @cancel="showDatetimePicker = false"
        />
      </van-popup>
      <!-- 省市区 -->
      <van-field
        readonly
        clickable
        name="area"
        :value="areaValue"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="areaOnConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
      <!-- 日历 -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="calendarValue"
        label="日历"
        placeholder="点击选择日期"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="calendarOnConfirm" />
      <!-- 提交 -->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <div class="address-box">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Form, Field, Button, Switch, Calendar, Checkbox, CheckboxGroup, Stepper, Rate, Slider, Uploader, Picker, Area, DatetimePicker, Popup, AddressEdit, Toast } from 'vant'
import { areaList } from '../../../api/json/area'

export default {
  name: 'FormMix',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Switch.name]: Switch,
    [Calendar.name]: Calendar,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Stepper.name]: Stepper,
    [Rate.name]: Rate,
    [Slider.name]: Slider,
    [Uploader.name]: Uploader,
    [Picker.name]: Picker,
    [Area.name]: Area,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [AddressEdit.name]: AddressEdit,
    [Toast.name]: Toast
  },
  data() {
    return {
      value: 1,
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      stepper: 1,
      rate: 3,
      slider: 50,
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      pickerValue: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false,
      showDatetimePicker: false,
      time: '',
      calendarValue: '',
      areaValue: '',
      showArea: false,
      areaList: areaList,
      showCalendar: false,
      searchResult: []
    }
  },
  watch: {
    $route(to, from) {
      if (from.path === '/form') {
        console.log('从vant进来的')
      }
    }
  },
  mounted() {
    console.log('this.$route', this.$route)
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
    },
    onFailed(errorInfo) {
      console.log('failed', errorInfo)
    },
    pickerOnConfirm(value) {
      this.pickerValue = value
      this.showPicker = false
    },
    datetimeOnConfirm(value) {
      this.time = value
      this.showDatetimePicker = false
    },
    // 地区选择
    areaOnConfirm(values) {
      this.areaValue = values.map((item) => item.name).join('/')
      this.showArea = false
    },
    // 日历选择
    calendarOnConfirm(date) {
      this.calendarValue = `${date.getMonth() + 1}/${date.getDate()}`
      this.showCalendar = false
    },
    // 地址
    onSave() {
      Toast('save')
    },
    onDelete() {
      Toast('delete')
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
