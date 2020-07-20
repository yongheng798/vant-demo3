<!--
 * @Author: your name
 * @Date: 2020-07-07 20:44:33
 * @LastEditTime: 2020-07-20 15:57:58
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
    <div class="scroll-container">
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
      <!-- 滚动通知 -->
      <van-notice-bar
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
      <!-- 九宫格 -->
      <!-- <van-grid :column-num="3">
        <van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" />
      </van-grid> -->
      <!-- 手风琴 -->
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
      </van-collapse>
      <!-- 分割线 -->
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        分割线文字
      </van-divider>
      <!-- 进度条 -->
      <Steps />
    </div>
    <div class="router-test">
      <ul>
        <li>
          <a @click="pushRouerForm">hello world路由跳转push</a>
        </li>
        <li>
          <a @click="goBackRouerF2">hello world路由跳转goBack</a>
        </li>
      </ul>
    </div>
    <!-- 底部菜单 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/" @>首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5" replace to="/vant">Vant</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20" replace to="/form">Form</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Search, DropdownMenu, DropdownItem, Switch, Cell, Button, Collapse, CollapseItem, Divider, NoticeBar, Grid, GridItem, Toast } from 'vant'

import Steps from '@/components/vant/steps/StepsIndex'

export default {
  name: 'Index',
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
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Divider.name]: Divider,
    [NoticeBar.name]: NoticeBar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Toast.name]: Toast,
    // [GridItem.Notify]: Notify
    Steps
  },
  data() {
    return {
      value: '',
      active: 'home',
      dropdownValue: 0,
      switch1: false,
      switch2: false,
      checked: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      activeName: '1'
    }
  },
  created() {
    // this.getRequest('http://mobile.qber.cn/index.php?act=cms_channel&op=channel_b', '').then(res => {})
  },
  mounted() {
    console.log('this.$route====', this.$route)
    console.log('this.$router====', this.$router)
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
    },
    // 路由编程式导航
    pushRouerForm(item, from) {
      // Notify({ type: 'primary', message: index })
      console.log('666666666', this.$route)
      this.push({
        path: '/form',
        query: {
          classId: '/form'
        }
      })
    },
    goBackRouerF2(item, from) {
      // Notify({ type: 'primary', message: index })
      console.log('5555', this.$route)
      this.goBack(2)
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
.scroll-container{
  position: relative;
  width: 100%;
  height: calc(100% -150px);
  overflow-y: auto;
  overflow-x: hidden;
}
.router-test{
  margin: 50px auto;
  padding-bottom: 100px;
}
</style>
