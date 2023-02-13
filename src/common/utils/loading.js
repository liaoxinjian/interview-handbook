class Loading {

  constructor() {
    this.count = 0;
  }

  show() {
    if (!this.count) {
      uni.showToast({
        title: '加载中',
        icon: "loading",
        duration: 50000,
        mask: true,
      });
      // 是为了防止有多个 loading 存在
      this.count++;
    }
  }

  hide() {
    this.count--;
    if (this.count <= 0) {
      uni.hideToast();
      this.count = 0;
    }
  }
}
export default new Loading();