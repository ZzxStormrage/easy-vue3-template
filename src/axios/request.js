// export default service
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/localStorage'
import { useUserStoreHook } from '@/store/modules/user'

const IS_HTTPS = document.location.protocol === 'https:'
const baseURL = IS_HTTPS ? process.env.VUE_APP_BASE_API.replace(/^http/, 'https') : process.env.VUE_APP_BASE_API
// 约定好返回正取时的 code
const SUCEESS_CODE = '0000'

const service = axios.create({
  baseURL: baseURL,
  timeout: 500000 // request timeout
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 设置默认请求头
    var methodArr = ['post', 'delete', 'put']
    var addSign = methodArr.includes(config.method)
    if (addSign) {
      // 说明有特殊 sign
      if (!config.headers.sign) {
        // config.headers.sign = generateSignString(config.url, config.data)
      }
    }

    if (store.getters.token) {
      config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截（可根据具体业务作出相应的调整）
service.interceptors.response.use(
  (response) => {
    // apiData 是 API 返回的数据
    const apiData = response.data
    // 这个 Code 是和后端约定的业务 Code
    const code = apiData.code
    // 如果没有 Code, 代表这不是项目后端开发的 API
    if (code === undefined) {
      ElMessage.error('非本系统的接口')
      return Promise.reject(new Error('非本系统的接口'))
    } else {
      switch (code) {
        case SUCEESS_CODE:
          // code === 0 代表没有错误
          return apiData
        default:
          // 不是正确的 Code
          ElMessage.error(apiData.message || 'Error')
          return Promise.reject(new Error('Error'))
      }
    }
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          // Token 过期时，直接退出登录并强制刷新页面（会重定向到登录页）
          useUserStoreHook().logout()
          location.reload()
          error.message = '登录信息已过期，请重新登录!'
          break
        case 422:
          error.message = getErrorMsg(error.response.data.message)
          break
        case 404:
          error.message = '哎呀~没有找到该地址'
          break
        case 500:
          error.message = '槽糕~服务器竟然出错了，请稍后重试'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      error.message = '连接到服务器失败'
    }

    if (error.response.status !== 401) {
      ElMessage.error(apiData.message || 'Error')
    }

    return Promise.reject(error)
  }
)
function getErrorMsg(msg) {
  console.log(msg)
  const str_arr = JSON.parse(msg)
  let str = ''

  if (str_arr[0]) {
    str = str_arr[0].error[0]
  }
  return str
}
export default service
