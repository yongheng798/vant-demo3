<!--
 * @Descripttion: 陈品富写的demo描述
 * @version: 1.0
 * @Author: chenpinfu~陈品富
 * @Date: 2020-08-11 08:52:49
 * @LastEditors: chenpinfu~陈品富
 * @LastEditTime: 2020-08-11 08:58:13
-->
<template>
  <div class="comment-area">
    <h3>下拉加载更多</h3>
    <div class="comment-list">
      <ul>
        <li>hello world</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReachBottom: false,
      reachBottomDistance: 100,
      scrollHeight: 0,
      offsetHeight: 0
    }
  },
  mounted() {
    // 页面加载完成后  将高度存储起来
    const dom = document.querySelector('.comment-area .comment-list')
    this.scrollHeight = dom.scrollHeight
    this.offsetHeight = Math.ceil(dom.getBoundingClientRect().height)
  },
  methods: {
    onScroll(e) {
      const scrollTop = e.target.scrollTop
      const currentHeight = scrollTop + this.offsetHeight + this.reachBottomDistance

      if (currentHeight < this.scrollHeight && this.isReachBottom) {
        this.isReachBottom = false
      }
      if (this.isReachBottom) {
        return
      }
      if (currentHeight >= this.scrollHeight) {
        this.isReachBottom = true
        console.log('触底')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment-area{
  overflow-y: auto;
  .comment-list{

  }
}
</style>
