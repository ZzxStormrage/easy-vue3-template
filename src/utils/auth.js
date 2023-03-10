/*
 * @Author: your name
 * @Date: 2021-01-13 10:07:06
 * @LastEditTime: 2023-03-10 16:55:01
 * @LastEditors: zzx 452436275@qq.com
 * @Description: In User Settings Edit
 * @FilePath: /easy-vue3-template/src/utils/auth.js
 */
export function getToken() {
  try {
    return localStorage.getItem('token') || ''
  } catch {
    console.error('获取Token 失败')
  }
}

export function setToken(token) {
  localStorage.setItem('token', token)
}

export function removeToken() {
  localStorage.removeItem('token')
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem('user_info')) || {}
}

export function setUserInfo(data) {
  localStorage.setItem('user_info', JSON.stringify(data))
}

export function removeUserRole() {
  localStorage.removeItem('user_info')
}

export function getUserRole() {
  return localStorage.getItem('roles') || ''
}

export function setUserRole(data) {
  localStorage.setItem('roles', JSON.stringify(data))
}

export function removeUserRoloe() {
  localStorage.removeItem('roles')
}
