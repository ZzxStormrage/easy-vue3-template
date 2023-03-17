/*
 * @Date: 2023-03-16 15:34:02
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-16 15:44:07
 * @FilePath: /easy-vue3-template/src/store/modules/app.js
 */
import { defineStore } from 'pinia'
import { getSidebarStatus, setSidebarStatus } from '@/utils/localStorage'

export const useAppStore = defineStore('app', () => {
  const sidebar = reactive({
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  })
  const device = ref(0)

  const toggleSidebar = (withoutAnimation) => {
    sidebar.opened = !sidebar.opened
    sidebar.withoutAnimation = withoutAnimation
    if (sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }
  const closeSidebar = (withoutAnimation) => {
    sidebar.opened = false
    sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }
  const toggleDevice = (value) => {
    device.value = value
  }

  return { device, sidebar, toggleSidebar, closeSidebar, toggleDevice }
})
