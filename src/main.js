/*
 * @Date: 2023-01-31 16:02:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-01 14:20:19
 * @FilePath: /my-vue3-app/src/main.js
 */
import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import '@/style/index.scss'

const app = createApp(App)
const store = createPinia()

app.use(router)
app.use(store)
app.mount('#app')
