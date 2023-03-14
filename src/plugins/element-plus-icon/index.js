/*
 * @Date: 2023-03-14 18:16:47
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-14 18:17:05
 * @FilePath: /easy-vue3-template/src/plugins/element-plus-icon/index.js
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function loadElementPlusIcon(app) {
  /** 注册所有 Element Plus Icon */
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
