<!--
 * @Date: 2023-03-17 12:20:09
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 15:23:44
 * @FilePath: /easy-vue3-template/src/layout/components/Breadcrumb/index.vue
-->

<template>
  <el-breadcrumb class="app-breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
      <span v-if="item.redirect === 'noRedirect' || index === breadcrumbs.length - 1" class="no-redirect">
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handleLink(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { compile } from 'path-to-regexp'

  const route = useRoute()
  const router = useRouter()

  const breadcrumbs = ref([])

  const getBreadcrumb = () => {
    breadcrumbs.value = route.matched.filter((item) => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
  }

  const pathCompile = (path) => {
    const { params } = route
    const toPath = compile(path)
    return toPath(params)
  }

  const handleLink = (item) => {
    const { redirect, path } = item
    if (redirect) {
      router.push(redirect)
      return
    }
    router.push(pathCompile(path))
  }

  watch(
    () => route.path,
    (path) => {
      if (path.startsWith('/redirect/')) {
        return
      }
      getBreadcrumb()
    }
  )

  getBreadcrumb()
</script>

<style lang="scss" scoped>
  .el-breadcrumb__inner,
  .el-breadcrumb__inner a {
    font-weight: 400 !important;
  }

  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: var(--navigationbar-height);
    margin-left: 8px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
