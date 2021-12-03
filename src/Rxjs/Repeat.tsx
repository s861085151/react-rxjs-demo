import { useEffect } from 'react';

import { Observable, of } from 'rxjs';
import { repeat } from 'rxjs/operators';

const Range = (() => {
  useEffect(() => {
    of(1, 2, 3).pipe(
      repeat(2)
    ).subscribe((val) => {
      console.log(val, new Date().getTime())
    }, null, () => {
      console.log('complete');
    })
  }, [])

  useEffect(() => {
    const source$ = new Observable((observer: any) => {
      console.log('on subscribe');
      setTimeout(() => observer.next(1), 1000);
      setTimeout(() => observer.next(2), 2000);
      setTimeout(() => observer.next(3), 3000);
      setTimeout(() => observer.complete(), 4000);
      return {
        unsubscribe: () => {
          console.log('on unsubscribe');
        }
      }
    });

    const repeated$ = source$.pipe(
      repeat(2)
    );
    repeated$.subscribe({
      next: (v) => console.log(v),
      complete: () => console.log('complete')
    });
  }, [])



  return <div style={{ textAlign: 'center' }}>
    <img src="https://img30.360buyimg.com/ebookadmin/jfs/t17851/267/2412655883/29121/4dc67c9c/5af4077cN8c570e27.jpg" alt="" />
    <b >repeat结果的弹珠图</b>
    <img src="https://img30.360buyimg.com/ebookadmin/jfs/t17902/111/2456250484/68322/eb3ad547/5af4077dNd7eefe59.jpg" alt="" />
    <b >repeat重复订阅的弹珠图</b>
  </div>
})

export default Range;