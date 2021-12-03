
import { useEffect } from 'react';
import { from, Subscription } from 'rxjs';

const Range = (() => {


  useEffect(() => {
    const sub = new Subscription()
    const source$ = from([0, 1, 2]).subscribe((v) => {
      console.log(v, new Date())
    })
    sub.add(source$)
    return () => {
      sub.remove(source$)
    }
  }, [])

  useEffect(() => {
    const sub = new Subscription()
    const promise$ = from(new Promise((resolve, reject) => {
      // resolve('success')
      reject('error')
    })).subscribe({
      next: (v) => {
        console.log(v, new Date())
      },
      error: (error) => {
        console.log('catch', error);
      }
    })
    sub.add(promise$)
    return () => {
      sub.remove(promise$)
    }
  }, [])


  return null
})

export default Range;