/*
 * @Date: 2023-03-16 15:57:22
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:40:47
 * @FilePath: /easy-vue3-template/src/store/modules/settings.js
 */
import { defineStore } from 'pinia'
import layoutSettings from '@/config/layout'

export const useSettingsStore = defineStore('settings', () => {
  const fixedHeader = ref(layoutSettings.fixedHeader)
  const showSettings = ref(layoutSettings.showSettings)
  const showTagsView = ref(layoutSettings.showTagsView)
  const showSidebarLogo = ref(layoutSettings.showSidebarLogo)
  const showThemeSwitch = ref(layoutSettings.showThemeSwitch)
  const showGreyMode = ref(layoutSettings.showGreyMode)
  const showColorWeakness = ref(layoutSettings.showColorWeakness)

  return {
    fixedHeader,
    showSettings,
    showTagsView,
    showSidebarLogo,
    showThemeSwitch,
    showGreyMode,
    showColorWeakness
  }
})
