<template>
  <view class="layout">
    <scroll-view>
      <view class="item">
        <view class="itemText">题目一二三四五六七八九十</view>
        <view class="itemTime">更新时间: 2023-02-16</view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemText">题目一二三四五六七八九十</view>
        <view class="itemTime">更新时间: 2023-02-16</view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
      <view class="item">
        <view class="itemText">题目一二三四五六七八九十</view>
        <view class="itemTime">更新时间: 2023-02-16</view>
        <icon class="iconfont icon-youjiantou"></icon>
      </view>
    </scroll-view>
  </view>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
  .layout {
    width: 100%;
    height: 100vh;
    scroll-view {
      width: 100%;
      height: 100%;
      .item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20rpx 20rpx;
        box-sizing: border-box;
        width: 100%;
        height: 150rpx;
        border-bottom: 1px solid @text-color;
        &:last-child {
          border-bottom: none;
        }
        .itemText {
          font-size: 36rpx;
          color: @text-color;
        }
        .itemTime {
          font-size: 22rpx;
          color: rgba(0, 0, 0, .4);
        }
        .icon-youjiantou {
          position: absolute;
          right: 20rpx;
          top: 42%;
          color: @text-color;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>