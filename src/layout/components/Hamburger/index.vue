<!--
 * @Date: 2023-03-17 12:23:08
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:23:16
 * @FilePath: /easy-vue3-template/src/layout/components/Hamburger/index.vue
-->
<script setup>
  import { Expand, Fold } from '@element-plus/icons-vue'

  const props = defineProps({
    isActive: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits('toggle-click')

  const toggleClick = () => {
    emit('toggle-click')
  }
</script>

<template>
  <div @click="toggleClick">
    <el-icon :size="20" class="icon">
      <Fold v-if="props.isActive" />
      <Expand v-else />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
  .icon {
    vertical-align: middle;
  }
</style>
