<!--
 * @Date: 2023-03-09 16:21:30
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-15 15:39:57
 * @FilePath: /easy-vue3-template/src/layout/components/Sidebar/Logo.vue
-->
<script lang="ts" setup>
  const props = defineProps({
    collapse: {
      type: Boolean,
      default: true
    }
  })
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapse: props.collapse }">
    <transition name="sidebar-logo-fade">
      <router-link v-if="props.collapse" key="collapse" to="/">
        <img src="@/assets/logo/logo.png" class="sidebar-logo" />
      </router-link>
      <router-link v-else key="expand" to="/">
        <img src="@/assets/logo/logo.png" class="sidebar-logo-text" />
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: var(--header-height);
    line-height: var(--header-height);
    background-color: var(--sidebarlogo-bg-color);
    text-align: center;
    overflow: hidden;
    .sidebar-logo {
      display: none;
    }
    .sidebar-logo-text {
      height: 100%;
      vertical-align: middle;
    }
  }

  .collapse {
    .sidebar-logo {
      width: 100%;
      vertical-align: middle;
      display: inline-block;
    }
    .sidebar-logo-text {
      display: none;
    }
  }
</style>
