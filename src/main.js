/*
 * @Date: 2023-01-31 16:02:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-14 18:18:21
 * @FilePath: /easy-vue3-template/src/main.js
 */
import { createApp } from 'vue'

import App from './App.vue'
import store from '@/store'
import router from '@/router'
import '@/router/permission'

import { loadSvg } from '@/icons'
import { loadPlugins } from '@/plugins'

import '@/styles/index.scss'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// svg封装插件
import 'virtual:svg-icons-register'
import svgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

loadPlugins(app)
loadSvg(app)
app.use(store)
app.use(router)
app.mount('#app')

app.component('SvgIcon', svgIcon)
