import {getJSON} from './ajax'
import { SUCC_CODE, TIMEOUT } from './config'

// 获取数据
const getData = (url, options) => {
  return getJSON(url, {
    timeoutTime: TIMEOUT,
    ...options
  })
    .then(response => {
      if(response.code !== SUCC_CODE) throw new Error(`出错了：${response.cade}`)

      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export {getData}
