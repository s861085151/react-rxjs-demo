import { useEffect } from 'react';
import { timer, combineLatest } from 'rxjs';

import RenderImg from './components/RenderImg'

const CombineLatest = (() => {

  useEffect(() => {
    const source1$ = timer(0, 10000);
    const source2$ = timer(1000, 10000);

    const zip$ = combineLatest([source1$, source2$])
    zip$.subscribe({
      next: (val) => {
        console.log(val);
      },
      error: () => { },
      complete: () => {
        console.log('complete');
      }
    })
  }, [])


  return <RenderImg data={[
    {
      src: 'https://img30.360buyimg.com/ebookadmin/jfs/t19810/259/420861979/94283/5d148d23/5af4077dNf2e6709a.jpg',
      label: 'combineLatest的弹珠图'
    }
  ]} />

})

export default CombineLatest;