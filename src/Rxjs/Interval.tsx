
import { useEffect } from 'react';
import { interval } from 'rxjs';

import RenderImg from './components/RenderImg'

const Range = (() => {
  useEffect(() => {
    const timer = interval(1000).pipe(
    ).subscribe((val) => {
      console.log(val, new Date())
    }, null, () => {
      console.log('complete');
    })
    return () => {
      timer.unsubscribe()
    }
  }, [])

  return <RenderImg data={[{ src: 'https://img30.360buyimg.com/ebookadmin/jfs/t18544/186/2405938813/36465/a7478f9e/5af4077dNdec73344.jpg', label: 'interval产生的数据流' }]} />
})

export default Range;