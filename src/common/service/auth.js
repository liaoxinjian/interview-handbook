export default {
  wxLogin() {
    return new Promise((resolve, reject) => {
      uni.login({
        success: resolve,
        fail: reject,
      })
    })
  }
}