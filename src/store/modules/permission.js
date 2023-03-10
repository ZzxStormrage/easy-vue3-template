/*
 * @Date: 2023-03-10 11:15:33
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-10 11:16:19
 * @FilePath: /easy-vue3-template/src/store/modules/permission.js
 */
import { ref } from 'vue'
import store from '@/store'
import { defineStore } from 'pinia'
import { constantRoutes, asyncRoutes } from '@/router'

const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined) {
        return route.meta.roles.includes(role)
      } else {
        return false
      }
    })
  } else {
    return true
  }
}

const filterAsyncRoutes = (routes, roles) => {
  const res = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref([])
  const dynamicRoutes = ref([])

  const setRoutes = (roles) => {
    let accessedRoutes
    if (roles.includes('admin')) {
      accessedRoutes = asyncRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    routes.value = constantRoutes.concat(accessedRoutes)
    dynamicRoutes.value = accessedRoutes
  }

  return { routes, dynamicRoutes, setRoutes }
})

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}
