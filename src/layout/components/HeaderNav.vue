<!--
 * @Date: 2023-02-01 12:22:04
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-02-07 15:32:48
 * @FilePath: /easy-vue3-template/src/layout/components/HeaderNav.vue
-->
<template>
  <div class="header-nav">
    <ul class="nav-list">
      <li v-for="(item, index) in navList" :key="index" class="item">
        <router-link :to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
const navList = ref([
  {
    title: 'HOME',
    path: '/'
  },
  {
    title: 'ABOUT',
    path: 'about'
  }
])
</script>
<style lang="scss" scoped>
.header-nav {
  background: var(--header-bg-color);

  .nav-list {
    display: flex;
    height: 48px;
    max-width: 890px;
    margin: 0 auto;
    align-items: center;

    .item {
      margin-right: 20px;
      font-size: 12px;
      font-weight: 400;
      color: #f5f5f7;
    }
  }
}
</style>
