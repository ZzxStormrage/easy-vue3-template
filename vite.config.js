/*
 * @Date: 2023-01-31 16:02:26
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-15 15:29:54
 * @FilePath: /easy-vue3-template/vite.config.js
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    /** DefineOptions 可以更简单的注册组件名称 */
    DefineOptions(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-import.d.ts'
      /* options */
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    /** SVG */
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 8080,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {}
  },
  build: {
    // 设置最终构建的浏览器兼容目标
    target: 'es2015',
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false
  }
})
