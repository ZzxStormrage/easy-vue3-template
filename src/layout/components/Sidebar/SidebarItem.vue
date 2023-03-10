<!--
 * @Date: 2023-03-10 11:10:53
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-10 11:11:07
 * @FilePath: /easy-vue3-template/src/layout/components/Sidebar/SidebarItem.vue
-->
<template>
  <div>
    <el-sub-menu :index="resolvePath(props.item.path)" popper-append-to-body>
      <template #title>
        <svg-icon
          v-if="props.item.meta && props.item.meta.svgIcon"
          :name="props.item.meta.svgIcon"
        />
        <component
          v-else-if="props.item.meta && props.item.meta.elIcon"
          :is="props.item.meta.elIcon"
          class="el-icon"
        />
        <span v-if="props.item.meta && props.item.meta.title">{{ props.item.meta.title }}</span>
      </template>
      <template v-if="props.item.children">
        <sidebar-item
          v-for="child in props.item.children"
          :key="child.path"
          :item="child"
          :isCollapse="props.isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
        />
      </template>
    </el-sub-menu>
  </div>
</template>
<script setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    isFirstLevel: {
      type: Boolean,
      default: true
    },
    basePath: {
      type: String,
      default: ''
    }
  })
</script>
<style lang="scss" scoped></style>
