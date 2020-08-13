<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-07-31 11:25:27
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-03 15:25:07
-->
<template>
  <div class="picker-container-wrap">
    <h3>横向下拉选择框</h3>
    <div v-if="selectedNodesName.length" class="picker-select-wrap">
      <ul>
        <li v-for="(item,index) in selectedNodesName" :key="index" class="selected" @click="selectCurrentList(selectedNodesId[index],item,selectedNodesOrder[index])">{{ item }}</li>
      </ul>
    </div>

    <!-- <div class="picker-select-wrap">
      <ul v-for="(item,index) in selectedNodesList" :key="index">
        <li class="selected" @click="selectCurrentList2(index,item)">{{ item.name }}</li>
        <li v-for="(item1,index1) in item.children" :key="index1" class="selected" @click="selectCurrentList2(index1,item1)">{{ item1.name }}</li>
      </ul>
    </div> -->

    <div v-if="currentChildAllList.length" class="slider-list-wrap">
      <div class="slider-list-data">
        <div class="search-box">
          <input v-model="searchForms" type="text">
        </div>
        <ul>
          <li v-for="item in currentChildAllList" :key="item.id" @click="selectChildNodes(item)"><span>样式</span><h3>{{ item.name }}</h3></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { treeData } from './treeData'
export default {
  name: 'Index',
  data() {
    return {
      treeData: treeData, // 树形结构
      maxFloor: 0, // 树形结构的最大层级
      selectedNodesList: [], // 选中的节点列表
      selectedNodesName: [], // 选中当前节点的名称数组
      selectedNodesId: [], // 选中当前节点的ID数组
      selectedNodesOrder: [], // 选中当前节点的Order数组
      currentChildList: [], // 当前层级下的子选项
      currentChildAllList: [], // 当前子下拉元素的所有元素
      searchChildList: [], // 搜索下的子集
      // 省市区县
      prov: '北京',
      city: '北京',
      district: '东城区',
      cityArr: [],
      districtArr: []
    }
  },
  computed: {
    // 搜索过滤
    searchForms() {
      // 无关键词
      // if (!this.searchForms) {
      //   return this.currentChildList.children
      // }
      // 搜索过滤
      return this.currentChildList.filter(item => {
        // return item.name.indexOf(this.searchForms) !== -1 //ES5写法
        return item.name.includes(this.searchForms) // ES6写法
      })
    }
  },
  mounted() {
    // 加载默认选中值
    this.init()
  },
  methods: {
    init() {
      // 获取选中的值名称
      this.selectedNodesName = this.getTreeNames(this.treeData, 'name', 'selected')
      this.selectedNodesId = this.getTreeNames(this.treeData, 'id', 'selected')
      this.selectedNodesOrder = this.getTreeNames(this.treeData, 'order', 'selected')
      // 选中的节点结构
      this.selectedNodesList = this.treeDeal(this.treeData, node => node.selected === true)
      //
      if (this.selectedNodesList && this.selectedNodesList.length) {
        // this.currentChildAllList =
      } else {
        this.currentChildAllList = treeData
      }
      console.log('this.selectedNodesList===', this.selectedNodesList)
      // 查看最深的层级
      this.maxFloor = this.getMaxFloor(treeData)
      console.log('this.maxFloor===', this.maxFloor)
    },
    // 获取选中的数据

    // 横向选中点击显示当前,index为对应的ID，order为对应的排序，item为名称
    selectCurrentList(id, item, order) {
      console.log(id, item, order)
      // 点击当前选项筛选当前所有子集
      const oldTreeData = JSON.parse(JSON.stringify(this.treeData))
      if (!id && item && order) {
        if (order === 1) {
          this.currentChildAllList = this.treeDeal(oldTreeData, node => node.order === order)
        } else if (order > 1) {
          this.currentChildAllList = this.getTreeChild(oldTreeData, id)
        }
      }
      console.log('this.currentChildAllList', this.currentChildAllList)

      // 层级对象遍历
      // console.log(this.flattenItem(oldTreeData, 0, id))
    },
    selectCurrentList2(index, item) {
      console.log(index, item)
      // 当前下的所有子列表
      for (const i in this.treeData) {
        const obj = this.treeData[i]
        if (obj.name === this.prov) {
          this.currentChildAllList = obj.children
          break
        }
      }
      console.log(this.currentChildAllList)
      // this.city = this.cityArr[1].name
      // this.currentChildAllList = treeData.children[0]
    },
    // 子列表选中赋值到横向
    selectChildNodes() {

    },

    // 递归获取选中的值的名称
    // 递归过滤取值,nodes是取值节点，arrtName是要获取的值,selected为取值对应true的字段
    getTreeNames(treeNodes, attrName, selected) {
      // 如果已经没有节点了，结束递归
      if (!(treeNodes && treeNodes.length)) {
        return []
      }
      const oldNodes = JSON.parse(JSON.stringify(treeNodes))
      const newChildren = []
      const getSome = (arr) => {
        arr.some((val, index) => {
          if (val[selected] || val[selected] === true || val[selected] === 'true') {
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
      console.log('newChildren===', newChildren)
      return newChildren
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
    // 取数据任意层级数据, * @param {node => boolean} predicate 过滤条件，符合条件的节点保留
    getTreeChild(treeNodes, val) {
      // 如果已经没有节点了，结束递归
      if (!(treeNodes && treeNodes.length)) {
        return []
      }
      const oldNodes = JSON.parse(JSON.stringify(treeNodes))
      const newChildren = oldNodes.filter((item) => {
        return item.id === val
      })

      return newChildren
    },
    /* 层级对象递归遍历，获取某一层级的全部子对象
    将item扁平化，
    currentDeep 初始深度，
    depth 目标深度，默认无限，
    context 初始context
    */
    flattenItem(item, currentDeep = 0, depth, context = []) {
      item.deep = currentDeep
      item.context = context
      if (item.children && currentDeep !== depth) {
        return item.children.map((child, index) => this.flattenItem(child, currentDeep + 1, depth, [...context, index])).flat()
      } else {
        return [item]
      }
    },
    // 获取数组层级深度
    getMaxFloor(treeData) {
      if (!treeData.length && !Array.isArray(treeData)) return []
      // const floor = 0
      // const v = this
      const oldNodes = JSON.parse(JSON.stringify(treeData))
      let max = 0
      function each(data, floor) {
        data.forEach(e => {
          e.floor = floor
          if (floor > max) {
            max = floor
          }
          if (e.children.length > 0) {
            each(e.children, floor + 1)
          }
        })
      }
      each(oldNodes, 1)
      return max
    },
    // 递归赋值,递归的key
    treeSetData(treeData) {
      if (treeData && !treeData.length && !Array.isArray(treeData)) return []
      const oldNodes = JSON.parse(JSON.stringify(treeData))

      let str = `<ul>`
      for (let i = 0; i < oldNodes.length; i++) {
        str += `<li>${oldNodes[i].name}</li>`
        if (oldNodes[i].children) {
          str += this.treeSetData(oldNodes[i].children)
        }
      }
      str += '</ul>'
      return str
    }
  }
}
</script>

<style lang="less" scoped>
.picker-container-wrap{
  position: relative;
  padding: 20px;
  background-color: #ffc;
  .picker-select-wrap{
    width: 100%;
    height: 60px;
    background-color: #ccc;
    ul{
      display: flex;
      justify-content: center;
      li{
        flex: 1;
        color: #fff;
      }
      &.selected{
        color: #06f;
      }
    }
  }
  .slider-list-wrap{
    position: absolute;
    top: 180px;
    left: 0;
    width: 100%;
    height: calc(100%-120px);
    background-color: #f2c;
    .slider-list-data{
      .search-box{
        height: 60px;
        line-height: 60px;
        width: 100%;
        border: none;
        border-radius: 20px;
        background-color: rgba(0,0,0,0.5);
      }
      ul{
        background-color: #f2c;
        li{
          text-align: left;
          padding: 0 20px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          color: #fff;
          h3{
            padding-left: 60px;
          }
        }
      }
    }
  }
}
</style>
