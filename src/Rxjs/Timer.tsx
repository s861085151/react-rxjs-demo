
import { useEffect } from 'react';
import { timer } from 'rxjs';

import RenderImg from './components/RenderImg'

const Range = (() => {
  useEffect(() => {
    const _timer = timer(0).pipe(
    ).subscribe((val) => {
      console.log(val, new Date())
    }, null, () => {
      console.log('complete');
    })
    return () => {
      _timer.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const _timer = timer(5000, 1000).pipe(
    ).subscribe((val) => {
      console.log(val, new Date())
    }, null, () => {
      console.log('complete');
    })
    return () => {
      _timer.unsubscribe()
    }
  }, [])

  return <RenderImg data={[
    {
      src: 'https://img30.360buyimg.com/ebookadmin/jfs/t17830/146/2435734993/8868/28f23d5c/5af4077cNb19ba8cc.jpg',
      label: '一个参数的timer的弹珠图'
    },
    {
      src: 'https://img30.360buyimg.com/ebookadmin/jfs/t20113/121/443739533/31513/6628757e/5af4077dNb0c9fdbb.jpg',
      label: '两个参数的timer的弹珠图'
    }
  ]} />
})

export default Range;