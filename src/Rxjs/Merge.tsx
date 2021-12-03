import { useEffect } from 'react';

import { merge, timer } from 'rxjs';
import { map } from 'rxjs/operators'

import RenderImg from './components/RenderImg'

const Merge = (() => {

  // 通常用来处理异步数据流
  useEffect(() => {
    const source1$ = timer(0, 1000).pipe(map((v) => v + 'A'))
    const source2$ = timer(500, 1000).pipe(map((v) => v + 'B'))

    const merge$ = merge(source1$, source2$)
    merge$.subscribe((val) => {
      console.log(val);
    })
    return () => {

    }
  }, [])




  return <>
    <RenderImg data={[
      {
        src: 'https://img30.360buyimg.com/ebookadmin/jfs/t18268/167/2434452934/70196/b6801419/5af4077cNf455a951.jpg',
        label: 'merge的弹珠图'
      }
    ]} />
  </>
})

export default Merge;