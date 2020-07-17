<!--
 * @Author: your name
 * @Date: 2020-07-17 12:32:17
 * @LastEditTime: 2020-07-17 12:47:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\vant\address\Area.vue
-->
<template>
  <div class="area-container-wrap">
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
  </div>
</template>
<script>
import { Field, Picker, Area, Popup, Toast } from 'vant'

export default {
  name: 'FormMix',
  components: {
    [Field.name]: Field,
    [Picker.name]: Picker,
    [Area.name]: Area,
    [Popup.name]: Popup,
    [Toast.name]: Toast
  },
  data() {
    return {
      showPicker: false,
      areaValue: '',
      showArea: false,
      showCalendar: false,
      searchResult: []
    }
  },
  methods: {
    // 地区选择
    areaOnConfirm(values) {
      this.areaValue = values.map((item) => item.name).join('/')
      this.showArea = false
    }

  }
}
</script>
