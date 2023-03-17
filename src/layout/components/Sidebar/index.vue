<!--
 * @Date: 2023-03-09 15:47:59
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:48:36
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
  import { useAppStore } from '@/store/modules/app'
  import { usePermissionStore } from '@/store/modules/permission.js'

  const route = useRoute()
  const appStore = useAppStore()

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
    return !appStore.sidebar.opened
  })
</script>
<style lang="scss" scoped>
  @mixin tip-line {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-color: var(--sidebar-menu-tip-line-bg-color);
    }
  }

  .has-logo {
    .el-scrollbar {
      height: calc(100% - var(--header-height));
    }
  }

  .el-scrollbar {
    height: 100%;
    :deep(.scrollbar-wrap) {
      // 限制水平宽度
      overflow-x: hidden !important;
      .el-scrollbar__view {
        height: 100%;
      }
    }
    // 滚动条
    :deep(.el-scrollbar__bar) {
      &.is-horizontal {
        // 隐藏水平滚动条
        display: none;
      }
    }
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }

  :deep(.el-menu-item),
  :deep(.el-sub-menu__title),
  :deep(.el-sub-menu .el-menu-item) {
    height: var(--sidebar-menu-item-height);
    line-height: var(--sidebar-menu-item-height);
    &.is-active,
    &:hover {
      background-color: var(--sidebar-menu-hover-bg-color);
    }
    display: block;
    * {
      vertical-align: middle;
    }
  }

  :deep(.el-menu-item) {
    &.is-active {
      @include tip-line;
    }
  }

  .el-menu--collapse {
    :deep(.el-sub-menu) {
      &.is-active {
        .el-sub-menu__title {
          color: var(--sidebar-menu-active-text-color) !important;
          @include tip-line;
        }
      }
    }
  }
</style>
