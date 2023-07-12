<!--
 * @Date: 2023-07-12 10:34:15
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-07-12 16:52:26
 * @FilePath: /easy-vue3-template/src/views/EditorMain.vue
-->
<template>
  <!-- 画布区域 -->
  <div class="works-main">
    <!-- 画布区域 -->
    <div id="workspace">
      <canvas id="canvas"></canvas>
    </div>

    <div class="right-pad">右侧栏</div>
  </div>
</template>
<script setup>
import { fabric } from 'fabric'

const canvas = {}

onMounted(() => {
  const _canvas = new fabric.Canvas('canvas', {
    fireRightClick: true, // 启用右键，button的数字为3
    stopContextMenu: true, // 禁止默认右键菜单
    controlsAboveOverlay: true // 超出clipPath后仍然展示控制条
  })
  canvas.c = _canvas
  canvas.c.renderAll()
})
</script>
<style lang="scss" scoped>
.works-main {
  width: 100%;
  height: 100%;
  display: flex;

  .canvas-pad {
    box-shadow: inset 0 0 9px 2px #0000001f;
    flex: 1;
  }

  .right-pad {
    width: 300px;
    height: 100%;
  }
}
</style>
