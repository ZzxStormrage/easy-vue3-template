/*
 * @Date: 2023-03-10 15:34:07
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 16:25:00
 * @FilePath: /easy-vue3-template/src/store/modules/user.js
 */
import { ref } from 'vue'
import store from '@/store'
import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from '@/utils/localStorage'
import { resetRouter } from '@/router'
import { loginApi, getUserInfoApi } from '@/api/login'

export const useUserStore = defineStore('user', () => {
  const token = ref(getToken())
  const roles = ref([])

  /** 设置角色数组 */
  const setRoles = (value) => {
    roles.value = value
  }
  /** 登录 */
  const login = (loginData) => {
    return new Promise(async (resolve, reject) => {
      let params = {
        username: loginData.username,
        password: loginData.password
      }

      let { err, res } = await loginApi(params)

      if (!err) {
        setToken(res.data.token)
        token.value = res.data.token
        resolve()
      } else {
        reject(err)
      }
    })
  }

  /** 获取用户详情 */
  const getInfo = () => {
    return new Promise((resolve, reject) => {
      // getUserInfoApi()
      //   .then((res) => {
      //     roles.value = res.data.roles
      //     resolve(res)
      //   })
      //   .catch((error) => {
      //     reject(error)
      //   })
      roles.value = ['admin']
      resolve(['admin'])
    })
  }

  /** 登出 */
  const logout = () => {
    removeToken()
    token.value = ''
    roles.value = []
    resetRouter()
  }

  /** 重置 Token */
  const resetToken = () => {
    removeToken()
    token.value = ''
    roles.value = []
  }

  return { token, roles, setRoles, login, getInfo, logout, resetToken }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
