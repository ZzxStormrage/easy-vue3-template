<!--
 * @Date: 2023-02-01 12:21:06
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-15 14:47:50
 * @FilePath: /easy-vue3-template/src/layout/index.vue
-->
<template>
  <div class="app-wrap">
    <Sidebar class="sidebar-container" />

    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>
<script setup>
  import { AppMain, Sidebar } from './components'
</script>
<style lang="scss" scoped>
  .app-wrap {
    position: relative;
    width: 100%;
  }
  .sidebar-container {
    transition: width 0.28s;
    width: var(--sidebar-width) !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background-color: var(--sidebar-menu-bg-color);
  }

  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: var(--sidebar-width);
    position: relative;
  }
</style>
