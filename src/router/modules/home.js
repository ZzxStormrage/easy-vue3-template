/*
 * @Date: 2023-03-10 15:11:45
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-10 15:14:16
 * @FilePath: /easy-vue3-template/src/router/modules/home.js
 */
const Layout = () => import('@/layout/index.vue')

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          svgIcon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]
