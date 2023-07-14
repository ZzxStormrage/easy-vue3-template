/*
 * @Date: 2023-07-12 15:23:10
 * @LastEditors: zzx 452436275@qq.com
 * @LastEditTime: 2023-07-14 10:56:45
 * @FilePath: /pc-img-editor/src/core/index.ts
 */
import EventEmitter from 'events'
import type EditorWorkspace from '@/core/EditorWorkspace'
import initControlsRotate from '@/core/initControlsRotate'
import initControls from '@/core/initControls'

class Editor extends EventEmitter {
  canvas: fabric.Canvas
  workspaceEl: HTMLElement
  editorWorkspace: EditorWorkspace | null

  constructor(canvas: fabric.Canvas) {
    super()

    this.canvas = canvas
    const workspaceEl = document.querySelector('#workspace') as HTMLElement

    if (!workspaceEl) {
      throw new Error('element #workspace is missing, plz check!')
    }
    this.workspaceEl = workspaceEl
    this.editorWorkspace = null

    initControls(canvas)
    initControlsRotate(canvas)
  }
}

export default Editor
