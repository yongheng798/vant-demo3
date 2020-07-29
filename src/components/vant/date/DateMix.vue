<!--
 * @Author: your name
 * @Date: 2020-07-17 12:16:12
 * @LastEditTime: 2020-07-28 16:05:25
 * @LastEditors: Please set LastEditors
 * @Description: 日期日历选择
 * @FilePath: \vant-demo3\src\components\vant\date\DateMix.vue
-->
<template>
  <div class="date-container-wrap">
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
    <!-- 时间 -->
    <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="time"
      label="年月日选择"
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

    <!-- 筛选年月 -->
    <van-calendar v-model="showCalendar" @confirm="calendarOnConfirm" />
    <!-- 时间 -->
    <van-field
      readonly
      clickable
      name="yearMouthPicker"
      :value="yearMouth"
      label="年月选择"
      placeholder="点击选择时间"
      @click="showYearMouthPicker = true"
    />
    <van-popup v-model="showYearMouthPicker" position="bottom">
      <van-datetime-picker
        v-model="currentYearMouth"
        type="year-month"
        :min-date="minYearMouth"
        :max-date="maxYearMouth"
        :formatter="formatterDatetimePicker"
        @confirm="yearMouthOnConfirm"
        @cancel="showYearMouthPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, Calendar, Picker, DatetimePicker, Popup } from 'vant'

export default {
  name: 'FormMix',
  components: {
    [Field.name]: Field,
    [Picker.name]: Picker,
    [Calendar.name]: Calendar,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  },
  data() {
    return {
      pickerValue: '',
      showPicker: false,
      showDatetimePicker: false,
      minDate: new Date(2020, 0, 0),
      maxDate: new Date(2021, 10, 1),
      currentDate: new Date(),
      time: '',
      calendarValue: '',
      showCalendar: false,
      // 年月选择
      yearMouth: '',
      currentYearMouth: new Date(),
      showYearMouthPicker: false,
      minYearMouth: new Date(2020, 0, 1),
      maxYearMouth: new Date(2020, 11, 1)
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
    const nowDate = new Date()
    // 默认日历
    this.calendarValue = `${nowDate.getMonth() + 1}/${nowDate.getDate()}`
    // 默认年月日
    this.time = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`
    // 默认年月
    this.yearMouth = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}`
  },
  methods: {
    // 年月日选择
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
    // 日历选择
    calendarOnConfirm(date) {
      this.calendarValue = `${date.getMonth() + 1}/${date.getDate()}`
      this.showCalendar = false
    },
    // 年月选择
    yearMouthOnConfirm(value) {
      const times = new Date(parseInt(Date.parse(value)))

      const $_year = times.getFullYear()
      const $_month = parseInt(times.getMonth()) + 1
      const $_f_date = `${$_year}-${$_month}`
      this.yearMouth = $_f_date
      const $_f_date2 = `${$_year}年${$_month}月`

      console.log('time', Date.parse(value), `${$_f_date2}`)
      this.showYearMouthPicker = false
    }
  }
}
</script>
