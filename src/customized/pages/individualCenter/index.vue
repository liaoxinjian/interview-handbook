<template>
  <view class="layout">
    <view class="backgroundColor"></view>
    <view class="headLayout">
      
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .layout {
    .backgroundColor {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 200rpx;
      background-color: @background-color;
      border-radius: 0 0 50% 50%;
    }
  }
</style>