<!--
 * @Date: 2023-03-09 16:21:30
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 15:32:21
 * @FilePath: /easy-vue3-template/src/layout/components/AppMain.vue
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <!-- <keep-alive> -->
        <component :is="Component" :key="key" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </section>
</template>

<script setup>
  const route = useRoute()
  const key = computed(() => {
    return route.path
  })
</script>

<style lang="scss" scoped>
  .app-main {
    min-height: calc(100vh - var(--navigationbar-height));
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: var(--body-bg-color);
  }

  .app-container {
    padding: 20px;
  }

  .fixed-header + .app-main {
    padding-top: var(--navigationbar-height);
    height: 100vh;
    overflow: auto;
  }

  .hasTagsView {
    .app-main {
      min-height: calc(100vh - var(--header-height));
    }
    .fixed-header + .app-main {
      padding-top: var(--header-height);
    }
  }
</style>
