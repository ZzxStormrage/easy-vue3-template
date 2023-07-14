import EventEmitter from 'events'
import { fabric } from 'fabric'
import { Canvas } from 'fabric/fabric-impl'
import { SelectEvent } from '@/utils/event/types'

/**
 * 发布订阅器
 */
class CanvasEventEmitter extends EventEmitter {
  handler: Canvas | undefined
  mSelectMode = ''

  init(handler: CanvasEventEmitter['handler']) {
    this.handler = handler
    if (this.handler) {
      this.handler.on('selection:created', () => this.selected())
      this.handler.on('selection:updated', () => this.selected())
      this.handler.on('selection:cleared', () => this.selected())
    }
  }

  /**
   * 暴露单选多选事件
   * @private
   */
  private selected() {
    if (!this.handler) {
      throw TypeError('还未初始化')
    }

    const actives = this.handler.getActiveObjects().filter((item) => !(item instanceof fabric.GuideLine)) // 过滤掉辅助线
    if (actives && actives.length === 1) {
      this.emit(SelectEvent.ONE, actives)
    } else if (actives && actives.length > 1) {
      this.mSelectMode = 'multiple'
      this.emit(SelectEvent.MULTI, actives)
    } else {
      this.emit(SelectEvent.CANCEL)
    }
  }
}

export default CanvasEventEmitter
