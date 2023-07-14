<!--
 * @Date: 2023-07-12 10:34:15
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-07-14 10:19:39
 * @FilePath: /pc-img-editor/src/views/EditorMain.vue
-->
<template>
  <!-- 画布区域 -->
  <div class="works-main">
    <!-- 画布区域 -->
    <div id="workspace">
      <canvas id="canvas"></canvas>
    </div>

    <div class="right-pad">
      <tools />
    </div>
  </div>
</template>
<script setup>
import tools from '@/components/tools.vue'

import { fabric } from 'fabric'
import Editor from '@/core'
import EditorWorkspace from '@/core/EditorWorkspace.ts'
// 功能组件
import CanvasEventEmitter from '@/utils/event/notifier'

const event = new CanvasEventEmitter()
const canvas = {}
const imgSrc = 'http://api.eleai.chat/storage/mnt/eleai/sd_tmp/images/2023-07-13/4w5IXZpSoIEycuU2KIeIKj2UOFNLEw1ZbFPGSYli.png'

function initCanvas() {
  const _canvas = new fabric.Canvas('canvas', {
    fireRightClick: false, // 启用右键，button的数字为3
    stopContextMenu: true, // 禁止默认右键菜单
    controlsAboveOverlay: true // 超出clipPath后仍然展示控制条
  })
  canvas.c = _canvas
  canvas.editor = new Editor(canvas.c)
  canvas.c.renderAll()
  canvas.editorWorkspace = new EditorWorkspace(canvas.c, {
    width: 900,
    height: 800
  })

  canvas.editorWorkspace.initBgImgWorkspace(imgSrc)
}

onMounted(() => {
  initCanvas()
})

provide('fabric', fabric)
provide('event', event)
provide('canvas', canvas)
</script>
<style lang="scss" scoped>
.works-main {
  width: 100%;
  height: 100%;
  display: flex;
  #workspace {
    box-shadow: inset 0 0 9px 2px #0000001f;
    overflow: hidden;
    width: 100%;
    position: relative;
    background-color: #f1f1f1;
  }
  .right-pad {
    width: 300px;
    min-width: 300px;
    height: 100%;
    padding: 10px;
  }
}

#canvas {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
