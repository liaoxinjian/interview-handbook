<template>
  <view class="layout">
    <view class="backgroundColor"></view>
    <swiper class="swiper" circular :autoplay="true" :interval="3000"
    :duration="500" style="width: 750rpx;height: 300rpx;">
      <swiper-item>
        <!-- <image :src="`${hostFile}test.png`"></image> -->
      </swiper-item>
    </swiper>
    <view class="classification">
      <view class="item">1</view>
      <view class="item">1</view>
      <view class="item">1</view>
      <view class="item">1</view>
      <view class="item">1</view>
      <view class="item">1</view>
    </view>
  </view>
</template>

<script>
import { envConfig } from 'common/config/index';
import loading from 'common/utils/loading';

export default {
  data() {
    return {
      hostFile: `${envConfig.HOSTFILE}`
    }
  },
  async onLoad() {
    
  },
  methods: {
    
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
    image {
      width: 100%;
      background-size: contain;
    }
  }
  .classification {
    padding: 0 20rpx;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
      margin-bottom: 20rpx;
      width: 340rpx;
      height: 360rpx;
      background: #000;
    }
  }
}
</style>