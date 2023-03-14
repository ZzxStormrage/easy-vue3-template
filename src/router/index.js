/*
 * @Date: 2023-01-31 16:21:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-14 17:03:18
 * @FilePath: /easy-vue3-template/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
const Layout = () => import('@/layout/index.vue')

import homePage from './modules/home'

export const constantRoutes = [
  ...homePage,
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu1',
    name: 'Menu',
    meta: {
      title: '多级菜单',
      svgIcon: 'menu'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1/index.vue'),
        redirect: '/menu/menu1/menu1-1',
        name: 'Menu1',
        meta: {
          title: 'menu1'
        },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/menu/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: {
              title: 'menu1-1'
            }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
            redirect: '/menu/menu1/menu1-2/menu1-2-1',
            name: 'Menu1-2',
            meta: {
              title: 'menu1-2'
            },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: {
                  title: 'menu1-2-1'
                }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: {
                  title: 'menu1-2-2'
                }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/menu/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: {
              title: 'menu1-3'
            }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/menu/menu2/index.vue'),
        name: 'Menu2',
        meta: {
          title: 'menu2'
        }
      }
    ]
  }
]
console.log('🚀 ~ file: index.js:96 ~ constantRoutes:', constantRoutes)

export const asyncRoutes = []

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
