<template>
  <view class="line" :style="styleStr">
    <div class="lineBox">
      {{ text }}
    </div>
  </view>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '标题',
    },
    styles: {
      type: Object,
      default: {},
    }
  },
  computed: {
    styleStr() {
      let str = "";
      Object.keys(this.styles).forEach(k => {
        str += `${k}: ${this.styles[k]};`
      })
      return str;
    }
  }
}
</script>

<style lang="less" scoped>
  .line {
    padding: 10rpx 25rpx 0;
    margin-bottom: 20rpx;
    .lineBox {
      padding-bottom: 10rpx;
      border-bottom: 2px solid @text-color;
    }
  }
</style>