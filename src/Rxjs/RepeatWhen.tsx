import { useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { repeatWhen, delay } from 'rxjs/operators';

const RepeatWhen = (() => {

  useEffect(() => {
    const fetch$ = ajax({
      url: 'https://api.github.com/repos/ReactiveX/rxjs',
      responseType: 'json'
    })

    fetch$.pipe(
      repeatWhen((notifications: any) => {
        return notifications.pipe(delay(5000))
      })
    ).subscribe((res) => {
      console.log(res, new Date());
    })

  }, [])

  // useEffect(() => {
  //   const notifier = (notifications$: any) => {
  //     return notifications$.pipe(
  //       delay(5000),
  //     )
  //   }
  //   ajax({
  //     url: 'https://api.github.com/repos/ReactiveX/rxjs',
  //     responseType: 'json'
  //   }).pipe(
  //     repeatWhen(notifier)
  //   ).subscribe((res) => {
  //     console.log(res, new Date());
  //   })
  // }, [])

  // useEffect(() => {
  //   const notifier = () => {
  //     return interval(1000);
  //   };

  //   const source$ = of(1, 2, 3);

  //   const repeated$ = source$.pipe(repeatWhen(notifier))
  //   repeated$.subscribe((val) => {
  //     console.log(val);
  //   })
  // }, [])

  return <div>
    <span>5秒更新一次数据</span>
  </div>
})

export default RepeatWhen;