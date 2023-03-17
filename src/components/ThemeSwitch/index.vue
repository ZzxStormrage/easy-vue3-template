<!--
 * @Date: 2023-03-17 12:26:07
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:27:26
 * @FilePath: /easy-vue3-template/src/components/ThemeSwitch/index.vue
-->
<script setup>
  import { useTheme } from '@/hooks/useTheme'
  import { MagicStick } from '@element-plus/icons-vue'

  const { themeList, activeThemeName, setTheme } = useTheme()

  const handleSetTheme = (name) => {
    setTheme(name)
  }
</script>

<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <div>
      <el-tooltip effect="dark" content="主题模式" placement="bottom">
        <el-icon :size="20">
          <MagicStick />
        </el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(theme, index) in themeList"
          :key="index"
          :disabled="activeThemeName === theme.name"
          :command="theme.name"
        >
          <span>{{ theme.title }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
