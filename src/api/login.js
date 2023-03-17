/*
 * @Date: 2023-03-10 15:50:25
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 17:12:22
 * @FilePath: /easy-vue3-template/src/api/login.js
 */
import to from '@/utils/to-promise'
import service from '@/axios/request'

/** 登录并返回 Token */
export function loginApi(data) {
  return to(
    new Promise((resolve, reject) => {
      service.post('/admin/admin-users/login', data).then(
        (res) => {
          if (res.data.code === '0000') {
            resolve(res.data)
          } else {
            reject(res.data)
          }
        },
        (err) => {
          reject(err)
        }
      )
    })
  )
}
/** 获取用户详情 */
export function getUserInfoApi() {}
