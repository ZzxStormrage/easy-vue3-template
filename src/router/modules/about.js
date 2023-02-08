/*
 * @Date: 2023-01-31 16:21:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-07 18:23:38
 * @FilePath: /easy-vue3-template/src/router/modules/about.js
 */
import Layout from '@/layout/index.vue'

export default [
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('@/views/about.vue')
      }
    ]
  }
]
