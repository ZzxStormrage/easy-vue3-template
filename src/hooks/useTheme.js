/*
 * @Date: 2023-03-17 11:36:36
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:31:15
 * @FilePath: /easy-vue3-template/src/hooks/useTheme.js
 */
import { ref } from 'vue'
import { getActiveThemeName, setActiveThemeName } from '@/utils/localStorage'

const DEFAULT_THEME_NAME = 'normal'

/** 注册的主题名称, 其中 DefaultThemeNameType 是必填的 */

/** 主题列表 */
const themeList = [
  {
    title: '默认',
    name: DEFAULT_THEME_NAME
  },
  {
    title: '黑暗',
    name: 'dark'
  },
  {
    title: '深蓝',
    name: 'dark-blue'
  }
]

/** 正在应用的主题名称 */
const activeThemeName = ref(getActiveThemeName() || DEFAULT_THEME_NAME)

const initTheme = () => {
  setHtmlClassName(activeThemeName.value)
}

const setTheme = (value) => {
  activeThemeName.value = value
  setHtmlClassName(value)
  setActiveThemeName(value)
}

/** 在 html 根元素上挂载 class */
const setHtmlClassName = (value) => {
  document.documentElement.className = value
}

/** 主题 hook */
export function useTheme() {
  return { themeList, activeThemeName, initTheme, setTheme }
}
