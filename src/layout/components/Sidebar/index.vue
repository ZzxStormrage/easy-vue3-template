<!--
 * @Date: 2023-03-09 15:47:59
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-10 18:24:36
 * @FilePath: /easy-vue3-template/src/layout/components/Sidebar/index.vue
-->
<template>
  <div>
    <Logo />
    <el-scrollbar wrap-class="scrollbar-wrap">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="SidebarMenuBgColor"
        :text-color="SidebarMenuTextColor"
        :active-text-color="SidebarMenuActiveTextColor"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :basePath="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
  import Logo from './Logo.vue'
  import SidebarItem from './SidebarItem.vue'
  import { getCssVariableValue } from '@/utils'
  import { usePermissionStore } from '@/store/modules/permission.js'

  const route = useRoute()
  // const appStore = useAppStore()
  const permissionStore = usePermissionStore()

  const SidebarMenuBgColor = getCssVariableValue('--sidebar-menu-bg-color')
  const SidebarMenuTextColor = getCssVariableValue('--sidebar-menu-text-color')
  const SidebarMenuActiveTextColor = getCssVariableValue('--sidebar-menu-active-text-color')

  const activeMenu = computed(() => {
    const { meta, path } = route
    if (meta.activeMenu) {
      return meta.activeMenu
    }
    return path
  })

  const isCollapse = computed(() => {
    return false
  })
</script>
<style lang="scss" scoped></style>
