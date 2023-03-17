<!--
 * @Date: 2023-03-09 16:21:30
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-16 15:26:12
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

<style lang="scss" scoped></style>
