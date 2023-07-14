<!--
 * @Date: 2023-07-13 18:47:08
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-07-14 19:42:44
 * @FilePath: /pc-img-editor/src/components/tools.vue
-->
<template>
  <div class="tool-box">
    <!-- <div class="icons" @click="() => addRect()">
      <BorderOutlined />
    </div> -->

    <div class="icons" @click="() => addTextBox()">
      <FontSizeOutLined />
    </div>
  </div>
</template>
<script setup>
import { BorderOutlined, FontSizeOutLined } from '@/utils/icon.js'
import EditorWorkspace from '@/core/EditorWorkspace.ts'
import useSelect from '@/hooks/select'
const { canvas, fabric } = useSelect()
import { v4 as uuid } from 'uuid'

// 默认属性
const defaultPosition = { shadow: '', fontFamily: 'arial' }

const addRect = (option) => {
  const rect = new fabric.Rect({
    ...defaultPosition,
    ...option,
    fill: 'rgba(0,0,0,0)',
    width: 100,
    height: 200,
    hasBorders: true,
    stroke: '#f13848',
    padding: -1.5,
    strokeWidth: 2,
    id: 'markRect',
    name: '矩形'
  })
  canvas.c.add(rect)
  canvas.c.setActiveObject(rect)

  const workspace = canvas.c.getObjects().find((item) => item.id === 'workspace')
  // 限制移动
  limitMovementWithinCanvas(rect, workspace)
}

// 添加到当前方框内
const addTextBox = (option) => {
  addRect()
  const markRect = canvas.c.getObjects().find((item) => item.id === 'markRect')

  let { top, left } = markRect

  const text = new fabric.Textbox('双击输入文本', {
    ...defaultPosition,
    ...option,
    fill: '#fff',
    splitByGrapheme: true,
    fontSize: 20,
    zIndex: 2,
    top: top,
    left: left,
    id: uuid()
  })

  canvas.c.add(text)
  canvas.c.setActiveObject(text)

  limitMovementWithinCanvas(text, markRect)

  // 计算文字相对于矩形的位置
  let offset = {
    left: text.left - markRect.left,
    top: text.top - markRect.top
  }
  text.on('moving', function () {
    // 更新文字相对于矩形的位置
    offset = {
      left: text.left - markRect.left,
      top: text.top - markRect.top
    }
  })

  moveEvens(text, markRect, offset)
}

// 文字随着框移动
function moveEvens(text, markRect, offset) {
  // 文字相对 框的位置
  markRect.on('moving', (opt) => {
    // 更新文字的位置
    text.set({
      left: markRect.left + offset.left,
      top: markRect.top + offset.top
    })
    canvas.c.renderAll()
  })
}

function limitMovementWithinCanvas(movingBox, boundingBox) {
  movingBox.on('moving', (opt) => {
    movingBox.setCoords()

    let top = movingBox.top
    let left = movingBox.left
    let topBound = boundingBox.top
    let bottomBound = topBound + boundingBox.height
    let leftBound = boundingBox.left
    let rightBound = leftBound + boundingBox.width
    movingBox.left = Math.min(Math.max(left, leftBound), rightBound - movingBox.width)
    movingBox.top = Math.min(Math.max(top, topBound), bottomBound - movingBox.height)
  })
}
</script>
<style lang="scss" scoped>
.tool-box {
  font-size: 30px;
  color: #4e4e4e;
  display: flex;

  .icons {
    width: 45px;
    height: 45px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #e8e8e8;
    }
  }
}
</style>
