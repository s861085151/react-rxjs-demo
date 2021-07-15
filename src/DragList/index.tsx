import React from 'react'
import { useEventCallback, useObservable } from 'rxjs-hooks'
import { fromEvent } from 'rxjs';
import { withLatestFrom, takeUntil, delay, map, switchMap } from 'rxjs/operators'

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

  const style: React.CSSProperties = useDelayedStyle(x, y, 0)
  const style1: React.CSSProperties = useDelayedStyle(x, y, 100)
  const style2: React.CSSProperties = useDelayedStyle(x, y, 200)
  const style3: React.CSSProperties = useDelayedStyle(x, y, 300)

  return (
    <>
      <div className="drag-box" style={style3}></div>
      <div className="drag-box" style={style2}></div>
      <div className="drag-box" style={style1}></div>
      <div className="drag-box" style={style} onMouseDown={onMouseDown}></div>
    </>
  )
}

function useDelayedStyle(x: any, y: any, delayTime: any) {
  const [left, top] = useObservable<any, any>((_, inputs$) => {
    return inputs$.pipe(delay(delayTime), map(([x, y]) => [x, y]))
  },
    [0, 0],
    [x, y]
  )
  return { left, top }
}

export default DragBox