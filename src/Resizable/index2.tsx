import React, { useRef, useEffect, useState } from 'react'
import { useEventCallback, useObservable } from 'rxjs-hooks'
import { fromEvent, interval } from 'rxjs';
import { withLatestFrom, takeUntil, throttleTime, map, pluck, pairwise, distinctUntilChanged, switchMap } from 'rxjs/operators'

import './style.sass';

/**
 * @withLatestFrom 合并自定义的Observable
 * @map 类似Array.prototype.map 将值输出
 * @switchMap 
 * @returns 
 */

function DragBox() {

  const container = useRef<HTMLDivElement>(null);
  const [onMouseDown, containerW] = useEventCallback<any, any, any>((event$, _, inputs$) => {
    return event$.pipe(
      withLatestFrom(inputs$.pipe(map(([ref]) => ref))),
      switchMap(([event, ref]) => {
        const style = getComputedStyle(ref.current);
        const width = parseFloat(style.getPropertyValue("width"));
        const startX = event.clientX;
        return fromEvent(document, 'mousemove').pipe(
          map((moveEvent: any) => {
            return width + moveEvent.clientX - startX
          }),
          takeUntil(fromEvent(document, 'mouseup'))
        )
      })
    )
  }, 500, [container])

  const style: React.CSSProperties = {
    width: containerW
  }

  return (
    <div className="resize-container" ref={container} style={style}>
      <div className="content"></div>
      <div className="resize" onMouseDown={onMouseDown}></div>
    </div>
  )
}

export default DragBox