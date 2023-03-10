<!--
 * @Date: 2023-02-01 12:21:06
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-09 16:24:07
 * @FilePath: /easy-vue3-template/src/layout/index.vue
-->
<template>
  <div class="app-wrap">
    <Sidebar />
    <AppMain />
  </div>
</template>
<script setup>
import { AppMain, Sidebar } from './components'
</script>
<style lang="scss" scoped></style>
