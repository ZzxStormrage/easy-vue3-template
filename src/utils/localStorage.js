/*
 * @Date: 2023-03-16 15:35:19
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-16 15:39:37
 * @FilePath: /easy-vue3-template/src/utils/localStorage.js
 */
/** 统一处理 localStorage */

export const getSidebarStatus = () => {
  return localStorage.getItem('sidebar-status')
}
//  'opened' | 'closed'
export const setSidebarStatus = (sidebarStatus) => {
  localStorage.setItem('sidebar-status', sidebarStatus)
}

export const getActiveThemeName = () => {
  return localStorage.getItem('active-theme-name')
}
export const setActiveThemeName = (themeName) => {
  localStorage.setItem('active-theme-name', themeName)
}

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
