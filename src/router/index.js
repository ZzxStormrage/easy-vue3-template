/*
 * @Date: 2023-01-31 16:21:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-07 18:24:03
 * @FilePath: /easy-vue3-template/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

import homeRouters from './modules/home'
import about from './modules/about'

const routes = [...homeRouters, ...about]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
