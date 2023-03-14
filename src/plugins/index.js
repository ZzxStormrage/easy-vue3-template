/*
 * @Date: 2023-03-14 18:16:47
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-14 18:17:35
 * @FilePath: /easy-vue3-template/src/plugins/index.js
 */
import { loadElementPlusIcon } from './element-plus-icon'

export function loadPlugins(app) {
  loadElementPlusIcon(app)
}
