/*
 * @Date: 2023-01-31 16:02:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-07 18:25:40
 * @FilePath: /easy-vue3-template/src/main.js
 */
import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/style/index.scss'

// svg封装插件
import 'virtual:svg-icons-register'
import svgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)
const store = createPinia()

app.use(router)
app.use(store)
app.mount('#app')

app.component('SvgIcon', svgIcon)
