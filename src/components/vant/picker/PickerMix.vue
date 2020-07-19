<!--
 * @Author: your name
 * @Date: 2020-07-17 11:47:26
 * @LastEditTime: 2020-07-19 12:07:32
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
    <!-- 分类选择器 -->
    <van-field
      readonly
      clickable
      name="pickerClass"
      :value="pickerTimeValue"
      label="分类选择器"
      placeholder="点击选择分类"
      @click="onShowTimePicker"
    />
    <van-popup v-model="showTimePicker" position="bottom">
      <van-picker
        ref="showRefTimePicker"
        show-toolbar
        title="分类选择器"
        :columns="timeDayListColumns"
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
      @click="onShowTwoPicker"
    />
    <van-popup v-model="showTwoPicker" position="bottom">
      <van-picker
        ref="showRefTwoPicker"
        show-toolbar
        title="两列动态选择器"
        :columns="twoListColumns"
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
      @click="onShowThreePicker"
    />
    <van-popup v-model="showThreePicker" position="bottom">
      <van-picker
        ref="showRefThreePicker"
        show-toolbar
        title="多列动态选择器"
        :columns="threeListColumns"
        @confirm="threeListpickerOnConfirm"
        @cancel="showThreePicker = false"
        @change="onThreeChange"
      />
    </van-popup>
  </div>
</template>
<script>
import { Field, Picker, Popup } from 'vant'

import { cityList, timeDayList, doubleCitys, levelTwoData, levelThreeData } from '@/api/json/vantTestData'

export default {
  name: 'FormMix',
  components: {
    [Field.name]: Field,
    [Picker.name]: Picker,
    [Popup.name]: Popup
  },
  data() {
    return {
      pickerValue: '',
      showPicker: false,
      cityListNames: [], // 单列选择器
      cityListDefaultIndex: 0, // 默认选中
      showTimePicker: false, // 多级选择器
      timeDayListDefaultIndex: [], // 多级默认选中
      pickerTimeValue: '',
      timeDayListColumns: [],
      // 筛选器动态选项
      pickerDoubleValue: '',
      showDoublePicker: false,
      doubleListColumns: [],
      doubleListDefaultIndex: [],
      // 多列动态选择器
      pickerTwoValue: '',
      showTwoPicker: false,
      twoListColumns: [],
      twoListDefaultIndex: [],
      // 多列动态选择器
      pickerThreeValue: '',
      showThreePicker: false,
      threeListColumns: [],
      threeListDefaultIndex: []
    }
  },
  mounted() {
    // 单列筛选器,加上默认选中值
    this.cityListNames = cityList.map((val, index) => {
      if (val.selected) {
        this.cityListDefaultIndex = index
        this.pickerValue = val.name
      }
      return val.name
    })
    // 多列筛选器
    this.timeDayListColumns = timeDayList
    // 取默认值
    this.timeDayListDefaultIndex = timeDayList.map((val) => {
      return val.className
    })
    this.pickerTimeValue = String(this.timeDayListDefaultIndex)
    // 动态筛选器
    this.doubleListColumns = [{ values: Object.keys(doubleCitys) }, { values: doubleCitys['浙江'] }]

    // 两列
    const handleTwoListData = JSON.parse(JSON.stringify(levelTwoData).replace(/childName/g, 'text'))
    const handleTwoListDataColumns = JSON.parse(JSON.stringify(handleTwoListData).replace(/childId/g, 'className'))
    // 赋值给组件
    this.twoListColumns = handleTwoListDataColumns
    const twoDefaultIndexNames = this.getTreeNames(handleTwoListDataColumns, 'text')
    this.twoListDefaultIndex = Array.from(twoDefaultIndexNames)
    this.pickerTwoValue = String(twoDefaultIndexNames)
    // 多列选择器三列以上的
    this.threeListColumns = levelThreeData
    // 过滤生成新的树形结构
    const result = this.treeDeal(levelThreeData, node => node.selected === true)
    console.log('treeDeal===', JSON.stringify(result, null, 4))
    // 过滤取值
    const resultNames = this.getTreeNames(levelThreeData, 'text')
    this.threeListDefaultIndex = Array.from(resultNames)
    this.pickerThreeValue = String(resultNames)
  },
  methods: {
    // 单列选择器
    pickerOnConfirm(value, index) {
      this.pickerValue = value
      this.showPicker = false
    },
    // 分类筛选器
    onShowTimePicker() {
      this.showTimePicker = true
      this.$nextTick(() => {
        if (this.timeDayListDefaultIndex.length) {
          this.$refs.showRefTimePicker.setValues(Array.from(this.timeDayListDefaultIndex))
        } else {
          this.$refs.showRefTimePicker.setValues([])
        }
      })
    },
    // 筛选器
    timeDayListpickerOnConfirm(value, index) {
      this.pickerTimeValue = value.toString()
      this.$refs.showRefTimePicker.setValues(value)
      this.timeDayListDefaultIndex = value
      this.showTimePicker = false
    },
    // 动态选择器
    doubleListpickerOnConfirm(value, index) {
      this.pickerDoubleValue = value.toString()
      this.showDoublePicker = false
    },
    onDoubleChange(picker, values) {
      picker.setColumnValues(1, doubleCitys[values[0]])
    },
    // 多列动态选择器
    twoListpickerOnConfirm(value, index) {
      this.pickerTwoValue = value.toString()
      console.log('pickerTwoValue====', this.$refs.showRefTwoPicker.getValues())
      // 选中给回默认值
      this.twoListDefaultIndex = value
      this.$refs.showRefTwoPicker.setValues(value)
      this.showTwoPicker = false
    },
    onTwoChange(picker, values) {
      console.log('picker ready select', picker)
      console.log(picker.getValues())
    },
    onShowTwoPicker() {
      this.showTwoPicker = true
      this.$nextTick(() => {
        if (this.twoListDefaultIndex.length) {
          this.$refs.showRefTwoPicker.setValues(Array.from(this.twoListDefaultIndex))
        } else {
          this.$refs.showRefTwoPicker.setValues([])
        }
      })
    },
    // 多列选中的默认值**********************************
    onShowThreePicker() {
      this.showThreePicker = true
      this.$nextTick(() => {
        if (Array.isArray(this.threeListDefaultIndex) && this.threeListDefaultIndex.length) {
          this.$refs.showRefThreePicker.setValues(Array.from(this.threeListDefaultIndex))
        } else {
          this.$refs.showRefThreePicker.setValues([])
        }
      })
    },
    // 多列动态选择器
    threeListpickerOnConfirm(value, index) {
      this.pickerThreeValue = value.toString()
      this.threeListDefaultIndex = value
      console.log('this.$refs.showThreePicker====', this.$refs.showRefThreePicker)
      console.log('pickerThreeValue====', this.$refs.showRefThreePicker.getValues())
      // 赋值给选中
      this.$refs.showRefThreePicker.setValues(value)
      this.showThreePicker = false
    },
    onThreeChange(picker, values) {
      console.log('picker ready select', picker)
      console.log(picker.getValues())
    },
    // 递归取值获取新的树形数据结构
    /**
 * 递归过滤节点，生成新的树结构
 * @param {Node[]} nodes 要过滤的节点
 * @param {node => boolean} predicate 过滤条件，符合条件的节点保留
 * @return 过滤后的节点
 */
    treeDeal(nodes, predicate) {
      // 如果已经没有节点了，结束递归
      if (!(nodes && nodes.length)) {
        return []
      }
      const oldNodes = JSON.parse(JSON.stringify(nodes))
      const newChildren = []
      for (const node of oldNodes) {
        if (predicate(node)) {
          // 如果节点符合条件，直接加入新的节点集
          newChildren.push(node)
          node.children = this.treeDeal(node.children, predicate)
        } else {
          // 如果当前节点不符合条件，递归过滤子节点，
          // 把符合条件的子节点提升上来，并入新节点集
          newChildren.push(...this.treeDeal(node.children, predicate))
        }
      }
      return newChildren
    },
    // 递归过滤取值,nodes是取值节点，arrtName是要获取的值
    getTreeNames(nodes, attrName) {
      // 如果已经没有节点了，结束递归
      if (!(nodes && nodes.length)) {
        return []
      }
      const oldNodes = JSON.parse(JSON.stringify(nodes))
      const newChildren = []
      const getSome = (arr) => {
        arr.some((val, index) => {
          if (val.selected === true || val.selected === 'true') {
            newChildren.push(val[attrName])
            if (val.children && Array.isArray(val.children) && val.children.length) {
              getSome(val.children)
            }
            return true
          }
          return false
        })
      }
      getSome(oldNodes)
      return newChildren
    }
  }
}
</script>
