import { useEffect } from 'react';
import { merge, zip, of, timer } from 'rxjs';

import RenderImg from './components/RenderImg'

const Zip = (() => {

  // useEffect(() => {
  //   const source1$ = of(0, 1, 2, 3);
  //   const source2$ = of(4, 5, 6);

  //   const zip$ = zip(source1$, source2$)
  //   zip$.subscribe((val) => {
  //     console.log(val);
  //   })
  //   return () => {

  //   }
  // }, [])

  useEffect(() => {
    const source1$ = timer(1000, 2000);
    const source2$ = of(4, 5, 6);

    const zip$ = zip(source1$, source2$)
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
      src: 'https://img30.360buyimg.com/ebookadmin/jfs/t17968/106/2409725865/111078/50c9cc7e/5af4077cNac26b890.jpg',
      label: 'zip的弹珠图'
    }
  ]} />

})

export default Zip;