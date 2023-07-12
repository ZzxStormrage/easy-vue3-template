/*
 * @Date: 2023-01-31 16:21:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-07-12 10:36:37
 * @FilePath: /easy-vue3-template/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '',
    component: () => import('@/views/EditorMain.vue')
  }
]

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
