<!--
 * @Date: 2023-03-15 15:31:12
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-15 15:31:17
 * @FilePath: /easy-vue3-template/src/layout/components/Sidebar/SidebarItemLink.vue
-->


<template>
  <a v-if="isExternal(props.to)" :href="props.to" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link v-else :to="props.to">
    <slot />
  </router-link>
</template>

<script setup>
  import { isExternal } from '@/utils/validate'

  const props = defineProps({
    to: {
      type: String,
      required: true
    }
  })
</script>
