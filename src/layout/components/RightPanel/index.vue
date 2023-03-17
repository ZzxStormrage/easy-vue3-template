<!--
 * @Date: 2023-03-17 12:11:42
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:12:00
 * @FilePath: /easy-vue3-template/src/layout/components/RightPanel/index.vue
-->

<template>
  <div class="handle-button" @click="show = true">
    <el-icon :size="24">
      <Setting />
    </el-icon>
  </div>
  <el-drawer v-model="show" size="300px" :with-header="false">
    <slot />
  </el-drawer>
</template>

<script setup>
  import { Setting } from '@element-plus/icons-vue'

  const props = defineProps({
    buttonTop: {
      type: Number,
      default: 350
    }
  })

  const buttonTopCss = props.buttonTop + 'px'
  const show = ref(false)
</script>

<style lang="scss" scoped>
  .handle-button {
    width: 48px;
    height: 48px;
    background-color: var(--rightpanel-button-bg-color);
    position: fixed;
    top: v-bind(buttonTopCss);
    right: 0px;
    border-radius: 6px 0 0 6px;
    z-index: 10;
    cursor: pointer;
    pointer-events: auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
