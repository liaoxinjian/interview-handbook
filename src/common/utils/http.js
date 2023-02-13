import config from 'common/config/index';
import Storage from 'common/utils/storage';
import Loading from 'common/utils/loading';

class Http {

  constructor() {
    this.host = config.HOSTAPI;
    // 补偿表
    this.compensateTable = {};
  }

  async errorCompensation(data) {
    const { reqUrl } = data;
    if (!this.compensateTable[reqUrl]) {
      this.compensateTable[reqUrl] = 1;
    }
    if (this.compensateTable[reqUrl] >= 4) {
      delete this.compensateTable[reqUrl];
      return false;
    }
    this.compensateTable[reqUrl]++;
    return await this.request(data);
  }

  _request(data) {
    return new Promise((resolve, reject) => {
      let { reqUrl, params, method, options } = data;
      let header = options.header;
      let url = reqUrl.split("?")[0];
      Loading && Loading.show()

      uni.request({
        url,
        data: params,
        method,
        header,
        success: resolve,
        fail: reject,
        complete() {
          Loading && Loading.hide()
        }
      })

    })
  }

  request(data) {
    let { options, reqUrl, params, method, isCache, isErrorCompensation } = data;

    return new Promise(async (resolve, reject) => {
      let token = Storage.get('cache');
      if (!token) {
        // 这里到时候要手动请求下 去拿取token
      }
      // 如果设置了 cache 并且从缓存里面读取有值的话  那就直接从缓存中去拿
      if (isCache) {
        let res = await Storage.get(reqUrl);
        if (res) return resolve(res);
      }
      // 合并 header
      options.header = Object.assign(options.header, {
        // 到时候这里要添加上 header 所传的东西
        token: `Bear ${token}`
      })
      let requestRes = {};
      try {
        requestRes = await this._request({
          reqUrl,
          params,
          method,
          options
        })
      } catch(e) {
        // 进行补偿
        if (isErrorCompensation) {
          requestRes = await this.errorCompensation(data);
          if (requestRes) {
            resolve(requestRes);
          } else {
            reject('补偿失败');
          }
        }
      }
      
      if (isCache) {
        await Storage.set(reqUrl, JSON.stringify(requestRes));
        return resolve(requestRes);
      }
      resolve(requestRes);
    })
  }

  get(data) {
    data = Object.assign(data, {
      method: 'GET'
    })
    return this.request(data);
  }

  post(data) {
    data = Object.assign(data, {
      method: 'POST'
    })
    return this.request(data);
  }

}

export default new Http();