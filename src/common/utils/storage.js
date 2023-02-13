class Storage {
  constructor() {
    this.key = "::cache";
  }

  set(key, data) {
    key += this.key;
    return new Promise(async (resolve, reject) => {
      try {
        await uni.setStorageSync(key, JSON.stringify(data));
        resolve();
      } catch(e) {
        reject(e)
      }
    })
  }

  get(key) {
    key += this.key;
    return new Promise(async (resolve, reject) => {
      try {
        let storageData = await uni.getStorageSync(key);
        resolve(JSON.parse(storageData));
      } catch(e) {
        reject(e)
      }
    })
  }
}

export default new Storage();