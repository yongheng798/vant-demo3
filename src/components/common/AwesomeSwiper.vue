<!--
 * @Author: your name
 * @Date: 2020-07-15 19:06:35
 * @LastEditTime: 2020-07-16 14:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\components\common\swiper.vue
-->
<template>
  <div class="container-swiper-wrap">
    <div class="swiper-wrap-box">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide class="slide-item">
          <h3>swiper演示</h3>
        </swiper-slide>
        <swiper-slide class="slide-item">Slide 2</swiper-slide>
        <swiper-slide class="slide-item">Slide 3</swiper-slide>
        <swiper-slide class="slide-item">Slide 4</swiper-slide>
        <swiper-slide class="slide-item">Slide 5</swiper-slide>
        <swiper-slide class="slide-item">Slide 6</swiper-slide>
        <swiper-slide class="slide-item">Slide 7</swiper-slide>
        <swiper-slide class="slide-item">Slide 8</swiper-slide>
        <swiper-slide class="slide-item">Slide 9</swiper-slide>
        <swiper-slide class="slide-item">Slide 10</swiper-slide>
        <!--以下看需要添加-->
        <div slot="button-prev" class="swiper-button-prev swiper-button-navigation" />
        <div slot="button-next" class="swiper-button-next swiper-button-navigation" />
        <div slot="pagination" class="swiper-pagination swiper-pagination-bullets" />
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import 'swiper/swiper-bundle.css' // 高版本引入方式
export default {
  name: 'AwesomeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        // 分页器配置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // type: 'custom', // 默认用 bullets
          // 自定义分页器
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          }
        },
        // 设定初始化时slide的索引
        initialSlide: 0,
        // // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: 'horizontal',
        // // 自动切换图配置
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 箭头配置
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 环状轮播
        loop: true,
        loopedSlides: 3,
        loopAdditionalSlides: 0,
        // 一个屏幕展示的数量
        slidesPerView: 1,
        // 小手掌抓取滑动
        grabCursor: true,
        // 间距
        spaceBetween: 26,
        // 修改swiper自己或子元素时，自动初始化swiper
        observer: true,
        // 修改swiper的父元素时，自动初始化swiper
        observeParents: true
      }
    }
  },
  computed: {
    // swiper() {
    //   // return this.$refs.mySwiper.$swiper
    // }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.swiper-wrap-box{
  max-height: 400px;
  margin-top: 30px;
  position: relative;
  .slide-item{
    height: 400px;
    line-height: 400px;
  }
  .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }
  .swiper-button-navigation{
    width: 30px;
    height: 30px;
    background-size: 100%;
  }
  /deep/ .swiper-pagination-bullet{
      background-color: 'red';
  }
  // 自定义分页器
    /deep/ .swiper-pagination-bullet-custom {
      @size: 20px;
      @text-color:#fff;
      width: @size !important;
      height: @size !important;
      line-height: @size !important;
      text-align: center;
      color: #fff;
      font-size: 10px;
      opacity: 0.7;
      background: rgba(0,0,0, 0.2);
      transition: all 0.5s;
      &:hover {
        opacity: 1;
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
        color: #fff;
        background: #007aff;
      }
    }

}
</style>
