<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-07-31 14:46:39
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-03 09:29:33
-->
<template>
  <div class="select-city-container-wrap">
    <div id="example">
      <select v-model="prov">
        <option v-for="option in arr" :key="option.name" :value="option.name">
          {{ option.name }}
        </option>
      </select>
      <select v-model="city">
        <option v-for="option in cityArr" :key="option.name" :value="option.name">
          {{ option.name }}
        </option>
      </select>
      <select v-if="district" v-model="district">
        <option v-for="option in districtArr" :key="option.name" :value="option.name">
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { arrAll } from './cityData'
export default {
  name: 'SelectCity',
  data() {
    return {
      arr: arrAll,
      prov: '北京',
      city: '北京',
      district: '东城区',
      cityArr: [],
      districtArr: []
    }
  },
  watch: {
    prov() {
      this.updateCity()
      this.updateDistrict()
    },
    city() {
      this.updateDistrict()
    }
  },
  beforeMount() {
    this.updateCity()
    this.updateDistrict()
  },

  methods: {
    // 更新城市
    updateCity() {
      for (const i in this.arr) {
        const obj = this.arr[i]
        if (obj.name === this.prov) {
          this.cityArr = obj.sub
          break
        }
      }
      this.city = this.cityArr[1].name
    },
    // 更新区
    updateDistrict() {
      for (const i in this.cityArr) {
        const obj = this.cityArr[i]
        if (obj.name === this.city) {
          this.districtArr = obj.sub
          break
        }
      }
      if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
        this.district = this.districtArr[1].name
      } else {
        this.district = ''
      }
    }
  }
}
</script>
