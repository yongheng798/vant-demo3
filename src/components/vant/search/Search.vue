<!--
 * @Author: your name
 * @Date: 2020-07-26 09:48:35
 * @LastEditTime: 2020-07-26 10:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\vant\search\Search.vue
-->
<template>
  <div class="search-wrap">
    <!-- 搜索 -->
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
import { Search, Toast } from 'vant'
// 引入防抖节流
import { Debounce, Throttle } from '@/until/common'
export default {
  name: 'Index',
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      value: ''
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 引入防抖
    onSearch: Debounce(function(row) {
      // APIService.changeMsg({ msg_id: row.msg_id, status: 0 }).then((data) => {
      //   this.teacherGetMsg()// 点击按钮后的逻辑代码存放的方法
      // }).catch((error) => {
      //   console.log('error请求失败', error)
      // })
      Toast(this.value)
    }, 500),
    // 节流
    onCancel: Throttle(function(row) {
      Toast(this.value)
    }, 500)
  }
}
</script>
