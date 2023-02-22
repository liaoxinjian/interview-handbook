<template>
  <view class="layout">
    <view class="title">{{ pagesData.title }}</view>
    <mp-html :content="pagesData.content" />
  </view>
</template>

<script>
import mpHtml from 'common/components/uni-app/components/mp-html/mp-html.vue';
export default {
    components: { mpHtml },
    data() {
        return {
            pagesData: {
                title: '标题一二三四五六七八九十十一十二',
                content: '<div>阿达是的</div>'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .layout {
        .title {
            padding: 30rpx 20rpx;
            font-size: 38rpx;
            color: @text-color;
            border-bottom: 1px solid #ccc;
        }
    }
</style>