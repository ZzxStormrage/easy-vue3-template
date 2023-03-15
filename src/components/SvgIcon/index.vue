<!--
 * @Date: 2023-02-07 15:51:46
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-15 15:26:08
 * @FilePath: /easy-vue3-template/src/components/SvgIcon/index.vue
-->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
<script setup>
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    }
  })

  const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
