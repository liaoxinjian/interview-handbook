<template>
  <view class="layout">
    <view class="backgroundColor"></view>
    <swiper class="swiper" circular :autoplay="true" :interval="3000"
    :duration="500" style="width: 750rpx;height: 300rpx;">
      <swiper-item>
        <image :src="`${hostFile}banner7501.png`"></image>
      </swiper-item>
    </swiper>
    <Line
      text="题目类型"
    />
    <view class="classification">
      <view class="item" @click="goLink">
        <view class="itemImage">
          <image :src="`${hostFile}stg/home/html.png`"></image>
        </view>
        <view class="itemContent">
          <text class="itemText">HTML</text>
          <text class="itemCount">总共160道题</text>
        </view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemImage">
          <image :src="`${hostFile}stg/home/html.png`"></image>
        </view>
        <view class="itemContent">
          <text class="itemText">HTML</text>
          <text class="itemCount">总共160道题</text>
        </view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemImage">
          <image :src="`${hostFile}stg/home/html.png`"></image>
        </view>
        <view class="itemContent">
          <text class="itemText">HTML</text>
          <text class="itemCount">总共160道题</text>
        </view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemImage">
          <image :src="`${hostFile}stg/home/html.png`"></image>
        </view>
        <view class="itemContent">
          <text class="itemText">HTML</text>
          <text class="itemCount">总共160道题</text>
        </view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemImage">
          <image :src="`${hostFile}stg/home/html.png`"></image>
        </view>
        <view class="itemContent">
          <text class="itemText">HTML</text>
          <text class="itemCount">总共160道题</text>
        </view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemImage">
          <image :src="`${hostFile}stg/home/html.png`"></image>
        </view>
        <view class="itemContent">
          <text class="itemText">HTML</text>
          <text class="itemCount">总共160道题</text>
        </view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
    </view>
  </view>
</template>

<script>
import { envConfig } from 'common/config/index';
import Line from './components/Line.vue';
import { navigateTo } from 'common/utils/navigate.js';

export default {
  data() {
    return {
      hostFile: `${envConfig.HOSTFILE}`
    }
  },
  components: {
    Line,
  },
  async onLoad() {
    
  },
  methods: {
    goLink() {
      navigateTo({
        url: '/customized/pages/topicList/index'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  .backgroundColor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200rpx;
    background-color: @background-color;
    border-radius: 0 0 50% 50%;
  }
  swiper {
    font-size: 20rpx;
    height: 176rpx;
    margin-bottom: 20rpx;
    image {
      width: 100%;
      height: 100%;
      background-size: contain;
    }
  }
  .classification {
    padding: 0 20rpx;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40rpx;
      padding: 20rpx 10rpx;
      box-sizing: border-box;
      width: 340rpx;
      border: 2px solid @background-color;
      border-radius: 10rpx;
      box-shadow: 2rpx 2rpx 2rpx rgba(0, 0, 0, .4);
      .itemImage {
        width: 80rpx;
        height: 80rpx;
        margin-right: 20rpx;
        image {
          width: 86rpx;
          height: 86rpx;
        }
      }
      .itemContent {
        display: flex;
        flex-direction: column;
        font-size: 32rpx;
        .itemCount {
          margin-top: 10rpx;
          padding: 5rpx 10rpx;
          font-size: 24rpx;
          color: @text-color;
          background-color: rgba(0, 0, 0, .1);
          border-radius: 48rpx;
        }
      }
      .icon-youjiantou {
        position: absolute;
        right: 20rpx;
        top: 50%;
        transform: translateY(-60%);
        font-size: 40rpx;
        color: @text-color;
      }
    }
  }
}
</style>