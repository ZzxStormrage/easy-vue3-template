<!--
 * @Date: 2023-02-01 12:21:06
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-02 15:16:41
 * @FilePath: /easy-vue3-template/src/layout/index.vue
-->
<template>
  <div class="app-wrap">
    <HeaderNav />

    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>
<script setup>
import HeaderNav from './components/HeaderNav.vue'
import AppMain from './components/AppMain.vue'
</script>
<style lang="scss" scoped></style>
