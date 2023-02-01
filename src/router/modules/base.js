/*
 * @Date: 2023-01-31 16:21:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-01 14:27:45
 * @FilePath: /my-vue3-app/src/router/modules/base.js
 */
import Layout from '@/layout/index.vue'

export default [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      }
    ]
  },
]
