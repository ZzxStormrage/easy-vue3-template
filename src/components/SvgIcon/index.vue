<!--
 * @Date: 2023-02-07 15:51:46
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-14 15:38:34
 * @FilePath: /easy-vue3-template/src/components/SvgIcon/index.vue
-->
<template>
  <svg aria-hidden="true" class="icon">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script>
  import { defineComponent, computed } from 'vue'

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon'
      },
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '#333'
      }
    },
    setup(props) {
      const symbolId = computed(() => `#${props.prefix}-${props.name}`)
      return { symbolId }
    }
  })
</script>

<style lang="scss" scoped>
  .icon {
    width: 16px;
    height: 16px;
  }
</style>
