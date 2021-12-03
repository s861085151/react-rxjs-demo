import { useEffect, useState, useRef } from 'react';
import { fromEvent } from 'rxjs';

const Range = (() => {
  const [count, setCount] = useState<number>(0)

  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!btnRef.current) return;
    fromEvent(btnRef.current, 'click').subscribe(() => {
      setCount((state) => state + 1)
    })
  }, [])

  return <div>
    <button ref={btnRef}>请蹂躏我!!!</button>
    <span>蹂躏我{count}次</span>
  </div>
})

export default Range;