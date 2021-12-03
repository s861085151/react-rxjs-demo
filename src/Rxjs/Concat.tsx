import { useEffect } from 'react';

import { of, concat } from 'rxjs';

import RenderImg from './components/RenderImg'

const Concat = (() => {

  useEffect(() => {
    const source1$ = of(1, 2, 3)
    const source2$ = of(4, 5, 6)

    const concat$ = concat(source1$, source2$)
    concat$.subscribe((val) => {
      console.log(val);
    })
  }, [])



  return <RenderImg data={[
    {
      src: 'https://img30.360buyimg.com/ebookadmin/jfs/t19369/104/2384551220/85658/365b299/5af40779Ne77f1d38.jpg',
      label: 'concat的弹珠图'
    }
  ]} />
})

export default Concat;