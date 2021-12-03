import React, { useRef, } from 'react'
import { useEventCallback, } from 'rxjs-hooks'
import { fromEvent, } from 'rxjs';
import { withLatestFrom, takeUntil, map, switchMap } from 'rxjs/operators'

import './style.sass';

/**
 * @withLatestFrom 合并自定义的Observable
 * @map 类似Array.prototype.map 将值输出
 * @switchMap 
 * @returns 
 */

function DragBox() {

  const left = useRef<HTMLDivElement>(null);
  const [onMouseDown, left_w] = useEventCallback<any, any, any>((event$, _, inputs$) => {
    return event$.pipe(
      withLatestFrom(inputs$.pipe(map(([ref]) => ref))),
      switchMap(([event, ref]) => {
        const style = getComputedStyle(ref.current);
        const width = parseFloat(style.getPropertyValue("width"));
        const startX = event.clientX;
        return fromEvent(window, 'mousemove').pipe(
          map((moveEvent: any) => {
            return moveEvent.clientX - startX + width
          }),
          takeUntil(fromEvent(window, 'mouseup'))
        )
      })
    )
  }, null, [left])

  const style: React.CSSProperties = {
    flexBasis: left_w === null ? 0 : left_w,
    flexGrow: left_w === null ? 1 : 0,
    flexShrink: 0
  }

  return (
    <div className="resize-container" >
      <div className="content" ref={left} style={style}></div>
      <div className="resize" onMouseDown={onMouseDown}></div>
    </div>
  )
}

export default DragBox