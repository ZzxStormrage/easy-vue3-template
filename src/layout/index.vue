<!--
 * @Date: 2023-02-01 12:21:06
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-02 18:11:08
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
<style lang="scss" scoped>
.app-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .main-container {
    flex: 1;
  }
}
</style>
