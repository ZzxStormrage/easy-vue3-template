<!--
 * @Date: 2023-03-16 15:29:01
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:30:20
 * @FilePath: /easy-vue3-template/src/layout/components/TagsView/ScrollPane.vue
-->
<script setup>
  import { computed, ref } from 'vue'
  import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
  import { useSettingsStore } from '@/store/modules/settings'

  const settingsStore = useSettingsStore()

  const scrollbarRef = ref()
  const scrollbarContentRef = ref()

  /** 当前滚动条距离左边的距离 */
  let currentScrollLeft = 0
  /** 每次滚动距离 */
  const translateDistance = 200

  /** 滚动时触发 */
  const scroll = (scrollLeft) => {
    currentScrollLeft = scrollLeft
  }

  /** 点击滚动 */
  const scrollTo = (direction) => {
    let scrollLeft = 0
    /** 可滚动内容的长度 */
    const scrollbarContentRefWidth = scrollbarContentRef.value.clientWidth
    /** 滚动可视区宽度 */
    const scrollbarRefWidth = scrollbarRef.value.wrapRef.clientWidth
    /** 最后剩余可滚动的宽度 */
    const lastDistance = scrollbarContentRefWidth - scrollbarRefWidth - currentScrollLeft
    // 没有横向滚动条，直接结束
    if (scrollbarRefWidth > scrollbarContentRefWidth) return
    if (direction === 'left') {
      scrollLeft = Math.max(0, currentScrollLeft - translateDistance)
    } else {
      scrollLeft = Math.min(currentScrollLeft + translateDistance, currentScrollLeft + lastDistance)
    }
    scrollbarRef.value.setScrollLeft(scrollLeft)
  }
  const showScreenfull = computed(() => {
    return settingsStore.showScreenfull
  })
</script>

<template>
  <div class="scroll-container">
    <el-icon class="arrow left" @click="scrollTo('left')">
      <ArrowLeft />
    </el-icon>
    <el-scrollbar ref="scrollbarRef" @scroll="scroll">
      <div ref="scrollbarContentRef" class="scrollbar-content">
        <slot />
      </div>
    </el-scrollbar>
    <el-icon class="arrow right" @click="scrollTo('right')">
      <ArrowRight />
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
  .scroll-container {
    height: 100%;
    user-select: none;
    display: flex;
    justify-content: space-between;
    .arrow {
      width: 40px;
      height: 100%;
      cursor: pointer;
      &.left {
        box-shadow: 5px 0 5px -6px #ccc;
      }
      &.right {
        box-shadow: -5px 0 5px -6px #ccc;
      }
    }
    .el-scrollbar {
      flex: 1;
      // 横向超出窗口长度时，显示滚动条
      white-space: nowrap;
      .scrollbar-content {
        display: inline-block;
      }
    }
    .screenfull {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
</style>
