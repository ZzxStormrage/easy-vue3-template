/*
 * @Author: your name
 * @Date: 2021-01-14 14:32:38
 * @LastEditTime: 2023-03-17 15:52:59
 * @LastEditors: zzx 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /easy-vue3-template/src/axios/http.js
 */
import service from './request'
import to from '@/utils/to-promise'

export function post(url, data) {
  return to(
    new Promise((resolve, reject) => {
      service.post(url, data).then(
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
export function get(url, data) {
  return to(
    new Promise((resolve, reject) => {
      service.get(url, { params: data }).then(
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

export function deleteRun(url, data) {
  return to(
    new Promise((resolve, reject) => {
      service.delete(url, data).then(
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

export function put(url, data) {
  return to(
    new Promise((resolve, reject) => {
      service.put(`${url}`, data).then(
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
