/*
 * @Date: 2023-03-17 12:28:51
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-03-17 12:29:47
 * @FilePath: /easy-vue3-template/src/store/modules/tags-view.js
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTagsViewStore = defineStore('tags-view', () => {
  const visitedViews = ref([])
  const cachedViews = ref([])

  const addVisitedView = (view) => {
    if (
      visitedViews.value.some((v, index) => {
        if (v.path === view.path) {
          if (v.fullPath !== view.fullPath) {
            // 防止 query 参数丢失
            visitedViews.value[index] = Object.assign({}, view)
          }
          return true
        }
      })
    ) {
      return
    }
    visitedViews.value.push(Object.assign({}, view))
  }
  const addCachedView = (view) => {
    if (typeof view.name !== 'string') return
    if (cachedViews.value.includes(view.name)) return
    if (view.meta?.keepAlive) {
      cachedViews.value.push(view.name)
    }
  }

  const delVisitedView = (view) => {
    for (const [i, v] of visitedViews.value.entries()) {
      if (v.path === view.path) {
        visitedViews.value.splice(i, 1)
        break
      }
    }
  }
  const delCachedView = (view) => {
    if (typeof view.name !== 'string') return
    const index = cachedViews.value.indexOf(view.name)
    index > -1 && cachedViews.value.splice(index, 1)
  }

  const delOthersVisitedViews = (view) => {
    visitedViews.value = visitedViews.value.filter((v) => {
      return v.meta?.affix || v.path === view.path
    })
  }
  const delOthersCachedViews = (view) => {
    if (typeof view.name !== 'string') return
    const index = cachedViews.value.indexOf(view.name)
    if (index > -1) {
      cachedViews.value = cachedViews.value.slice(index, index + 1)
    } else {
      // 如果 index = -1, 没有缓存的 tags
      cachedViews.value = []
    }
  }
  //#endregion

  const delAllVisitedViews = () => {
    // keep affix tags
    const affixTags = visitedViews.value.filter((tag) => tag.meta?.affix)
    visitedViews.value = affixTags
  }
  const delAllCachedViews = () => {
    cachedViews.value = []
  }

  return {
    visitedViews,
    cachedViews,
    addVisitedView,
    addCachedView,
    delVisitedView,
    delCachedView,
    delOthersVisitedViews,
    delOthersCachedViews,
    delAllVisitedViews,
    delAllCachedViews
  }
})
