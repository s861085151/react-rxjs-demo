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

  const [onMouseDown, [x, y]] = useEventCallback<any, any>((event$, state$) => {
    return event$.pipe(
      withLatestFrom(state$),
      map(([event, preState]) => [event.clientX, event.clientY, preState]),
      switchMap(([startX, startY, prevPos]) => { //
        return fromEvent(window, 'mousemove').pipe(
          map((moveEvent: any) => {
            return [
              moveEvent.clientX - startX + prevPos[0],
              moveEvent.clientY - startY + prevPos[1]
            ]
          }),
          takeUntil(fromEvent(window, 'mouseup'))
        )
      })
    )
  }, [0, 0])

  const style: React.CSSProperties = { left: x, top: y }

  return (
    <div className="drag-box" style={style} onMouseDown={onMouseDown}></div>
  )
}

export default DragBox