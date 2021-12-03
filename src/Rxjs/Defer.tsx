import { useCallback } from 'react';
import { defer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const RepeatWhen = (() => {

  const fetch = () => ajax({
    url: 'https://api.github.com/repos/ReactiveX/rxjs',
    responseType: 'json'
  })

  const source$ = defer(fetch);

  const handleClick = useCallback(
    () => {
      source$.subscribe((res) => {
        console.log(res);
      })
    },
    [source$],
  )


  return <div>
    <button onClick={handleClick}>点击我发起请求</button>
  </div>
})

export default RepeatWhen;