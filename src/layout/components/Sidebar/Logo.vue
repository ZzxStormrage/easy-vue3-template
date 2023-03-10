<!--
 * @Date: 2023-03-09 16:01:12
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-09 16:25:39
 * @FilePath: /easy-vue3-template/src/layout/components/Sidebar/Logo.vue
-->
<template>
  <div class="logo-wrap">
    <router-link to="/" key="collapse">
      <img src="@/assets/logo/logo.png" alt="" />
    </router-link>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.logo-wrap {
  width: 200px;
  height: 50px;
}
</style>
