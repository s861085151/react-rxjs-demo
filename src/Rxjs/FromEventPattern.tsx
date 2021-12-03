import { useEffect, useState, useRef } from 'react';
import { fromEventPattern, Subscription } from 'rxjs';

const FromEventPattern = (() => {
  const [count, setCount] = useState<number>(0)

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!btnRef.current) return;
    const sub = new Subscription()
    const source$ = fromEventPattern(
      (handle) => {
        btnRef.current?.addEventListener('click', handle)
      },
      (handle) => {
        btnRef.current?.removeEventListener('click', handle)
      }
    )

    sub.add(source$.subscribe({
      next: () => {
        setCount((state) => state + 1)
      },
      error: (error) => {
        console.log('error', error);
      },
      complete: () => {
        console.log('complate');
      }
    }))

    return () => {
      sub.unsubscribe()
      // source$.unsubscribe()
    }
  }, [])

  return <div>
    <button ref={btnRef}>请蹂躏我!!!</button>
    <span>蹂躏我{count}次</span>
  </div>
})

export default FromEventPattern;