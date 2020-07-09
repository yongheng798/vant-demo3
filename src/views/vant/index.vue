<!--
 * @Author: your name
 * @Date: 2020-07-07 20:44:33
 * @LastEditTime: 2020-07-09 20:08:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\views\vant\index.vue
-->
<template>
  <div class="containner">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 搜索 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 筛选分类 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="dropdownValue" :options="option" />
      <van-dropdown-item ref="item" title="筛选">
        <van-cell center title="标题">
          <template #right-icon>
            <van-switch v-model="checked" size="24" />
          </template>
        </van-cell>
        <van-button block type="info" @click="dropdownOnConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <!-- 底部菜单 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" replace to="/vant">Vant</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20" replace to="/form">Form</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem, Swipe, Search, SwipeItem, DropdownMenu, DropdownItem, Switch, Cell, Button, Toast } from 'vant'

export default {
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [Search.name]: Search,
    [SwipeItem.name]: SwipeItem,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Switch.name]: Switch,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {
      active: 'home',
      value: '',
      dropdownValue: 0,
      switch1: false,
      switch2: false,
      checked: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    },
    // 搜索演示
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      Toast('取消')
    },
    // 下拉
    dropdownOnConfirm() {
      this.$refs.item.toggle()
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
