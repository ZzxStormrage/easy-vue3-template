/*
 * @Date: 2023-01-31 16:21:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-02 15:20:56
 * @FilePath: /easy-vue3-template/src/router/modules/home.js
 */
import Layout from '@/layout/index.vue'

export default [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home-view.vue')
      }
    ]
  }
]
