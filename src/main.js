/*
 * @Date: 2023-01-31 16:02:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-13 17:23:53
 * @FilePath: /easy-vue3-template/src/main.js
 */
import { createApp } from 'vue'

import App from './App.vue'
import store from '@/store'
import router from '@/router'

import '@/styles/index.scss'
import '@/router/permission'

// svg封装插件
import 'virtual:svg-icons-register'
import svgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

app.component('SvgIcon', svgIcon)
