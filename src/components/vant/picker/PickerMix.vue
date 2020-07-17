<!--
 * @Author: your name
 * @Date: 2020-07-17 11:47:26
 * @LastEditTime: 2020-07-17 14:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\vant\picker\PickerMix.vue
-->
<template>
  <div class="picker-wrap">
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
  </div>
</template>
<script>
import { Form, Field, Button, Switch, Calendar, Checkbox, CheckboxGroup, Stepper, Rate, Slider, Uploader, Picker, Area, DatetimePicker, Popup, AddressEdit, Toast } from 'vant'

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
      pickerValue: '',
      showPicker: false,
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
