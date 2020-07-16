<!--
 * @Author: your name
 * @Date: 2020-07-07 20:44:24
 * @LastEditTime: 2020-07-16 19:45:34
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
        label="单列选择器"
        placeholder="点击选择城市"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          title="地区选择"
          :columns="cityListNames"
          :default-index="cityListDefaultIndex"
          @confirm="pickerOnConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <!-- 多列选择器 -->
      <van-field
        readonly
        clickable
        name="pickerClass"
        :value="pickerTimeValue"
        label="多列选择器"
        placeholder="点击选择分类"
        @click="showTimePicker = true"
      />
      <van-popup v-model="showTimePicker" position="bottom">
        <van-picker
          ref="showTimePicker"
          show-toolbar
          title="多列选择器"
          :columns="timeDayListColumns"
          :default-index="timeDayListDefaultIndex"
          @confirm="timeDayListpickerOnConfirm"
          @cancel="showTimePicker = false"
        />
      </van-popup>
      <!-- 动态选项 -->
      <van-field
        readonly
        clickable
        name="pickerDoubleClass"
        :value="pickerDoubleValue"
        label="动态选择器"
        placeholder="点击选择分类"
        @click="showDoublePicker = true"
      />
      <van-popup v-model="showDoublePicker" position="bottom">
        <van-picker
          ref="showDoublePicker"
          show-toolbar
          title="动态选择器"
          :columns="doubleListColumns"
          :default-index="doubleListDefaultIndex"
          @confirm="doubleListpickerOnConfirm"
          @cancel="showDoublePicker = false"
          @change="onDoubleChange"
        />
      </van-popup>
      <!-- 两列连级菜单 -->
      <van-field
        readonly
        clickable
        name="pickerTwoClass"
        :value="pickerTwoValue"
        label="两列动态选择器"
        placeholder="两列选择分类"
        @click="showTwoPicker = true"
      />
      <van-popup v-model="showTwoPicker" position="bottom">
        <van-picker
          ref="showTwoPicker"
          show-toolbar
          title="两列动态选择器"
          :columns="twoListColumns"
          :default-index="twoListDefaultIndex"
          @confirm="twoListpickerOnConfirm"
          @cancel="showTwoPicker = false"
          @change="onTwoChange"
        />
      </van-popup>
      <!-- 多列动态连级菜单 -->
      <van-field
        readonly
        clickable
        name="pickerThreeClass"
        :value="pickerThreeValue"
        label="多列动态选择器"
        placeholder="多列选择分类"
        @click="showThreePicker = true"
      />
      <van-popup v-model="showThreePicker" position="bottom">
        <van-picker
          ref="showThreePicker"
          show-toolbar
          title="多列动态选择器"
          :columns="threeListColumns"
          :default-index="threeListDefaultIndex"
          @confirm="threeListpickerOnConfirm"
          @cancel="showThreePicker = false"
          @change="onThreeChange"
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
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatterDatetimePicker"
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

import { cityList, timeDayList, doubleCitys, levelTwoData, levelThreeData } from '@/api/json/vantTestData'

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
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      time: '',
      calendarValue: '',
      areaValue: '',
      showArea: false,
      areaList: areaList,
      showCalendar: false,
      searchResult: [],
      cityListNames: [], // 单列选择器
      cityListDefaultIndex: 0, // 默认选中
      showTimePicker: false, // 多级选择器
      timeDayListDefaultIndex: 0, // 多级默认选中
      pickerTimeValue: '',
      timeDayListColumns: [],
      // 筛选器动态选项
      pickerDoubleValue: '',
      showDoublePicker: false,
      doubleListColumns: [],
      doubleListDefaultIndex: '',
      // 多列动态选择器
      pickerTwoValue: '',
      showTwoPicker: false,
      twoListColumns: [],
      twoListDefaultIndex: '',
      // 多列动态选择器
      pickerThreeValue: '',
      showThreePicker: false,
      threeListColumns: [],
      threeListDefaultIndex: ''
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
    // 单列筛选器
    this.cityListNames = cityList.map((val, index) => {
      if (val.selected) {
        this.cityListDefaultIndex = index
        this.pickerValue = val.name
      }
      return val.name
    })
    // 多列筛选器
    this.timeDayListColumns = timeDayList
    // this.pickerTimeValue = timeDayList[1]
    this.timeDayListDefaultIndex = 1
    // 动态筛选器
    this.doubleListColumns = [{ values: Object.keys(doubleCitys) }, { values: doubleCitys['浙江'] }]
    // 两列
    this.twoListColumns = levelTwoData
    const bbb = JSON.parse(JSON.stringify(this.twoListColumns).replace(/text/g, 'childName'))
    const ccc = JSON.parse(JSON.stringify(bbb).replace(/className/g, 'childId'))
    console.log('this.twoListColumns===更改过后的', ccc)
    // 多列选择器
    this.threeListColumns = levelThreeData
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
    // 日历
    datetimeOnConfirm(value) {
      const times = new Date(parseInt(Date.parse(value)))

      const $_year = times.getFullYear()
      const $_month = parseInt(times.getMonth()) + 1
      const $_day = times.getDate()
      const $_f_date = $_year + '-' + $_month + '-' + $_day
      this.time = $_f_date
      const $_f_date2 = $_year + '年' + $_month + '月' + $_day + '日'

      console.log('time', Date.parse(value), `${$_f_date2}`)
      this.showDatetimePicker = false
    },
    formatterDatetimePicker(type, val) {
      if (type === 'year') {
        return val + '年'
      }
      if (type === 'month') {
        return val + '月'
      }
      if (type === 'day') {
        return val + '日'
      }
      console.log('val====', val)
      return val
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
    },
    // 单列选择器
    pickerOnConfirm(value, index) {
      this.pickerValue = value
      console.log('cityList', cityList[index])
      this.showPicker = false
    },
    // 筛选器
    timeDayListpickerOnConfirm(value, index) {
      this.pickerTimeValue = value.toString()
      console.log('pickerTimeValue', value, index)
      console.log('timeDayList===has selected', timeDayList[0][index[0]], timeDayList[1][index[1]])
      console.log('showTimePicker====', this.$refs.showTimePicker.getValues())
      this.showTimePicker = false
    },
    // 动态选择器
    doubleListpickerOnConfirm(value, index) {
      this.pickerDoubleValue = value.toString()
      console.log('pickerDoubleValue', value, index)
      console.log('showDoublePicker====', this.$refs.showDoublePicker.getValues())
      this.showDoublePicker = false
    },
    onDoubleChange(picker, values) {
      picker.setColumnValues(1, doubleCitys[values[0]])
    },
    // 多列动态选择器
    twoListpickerOnConfirm(value, index) {
      this.pickerTwoValue = value.toString()
      console.log('pickerTwoValue', value, index)
      console.log('pickerTwoValue====', this.$refs.showTwoPicker.getValues())
      this.showTwoPicker = false
    },
    onTwoChange(picker, values) {
      console.log('picker ready select', picker)
      console.log(picker.getValues())
    },
    // 多列动态选择器
    threeListpickerOnConfirm(value, index) {
      this.pickerThreeValue = value.toString()
      console.log('pickerThreeValue', value, index)
      console.log('pickerThreeValue====', this.$refs.showThreePicker.getValues())

      this.showThreePicker = false
    },
    onThreeChange(picker, values) {
      console.log('picker ready select', picker)
      console.log(picker.getValues())
    }

  }
}
</script>

<style lang="less" scoped>

</style>
