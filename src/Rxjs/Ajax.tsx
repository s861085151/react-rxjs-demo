import { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const Range = (() => {

  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!btnRef.current) return;
    fromEvent(btnRef.current, 'click').subscribe(() => {
      ajax({
        url: 'https://api.github.com/repos/ReactiveX/rxjs',
        responseType: 'json'
      }).subscribe((res) => {
        console.log(res);
      })
    })
  }, [])

  return <div>
    <button ref={btnRef}>点击我获取数据</button>
    {/* <span>蹂躏我{count}次</span> */}
  </div>
})

export default Range;