import { useEffect, useLayoutEffect, useRef, useState } from "react";

import './style.sass';

const UseEffect = () => {

  const [state, setState] = useState<any>('hello world')

  const ref = useRef<any>(null)

  useEffect(() => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }
    ref.current.style.left = '500px';
    setState('hello world 12312312312321321321')
  }, [])
  return (
    <div className="box">
      <p>useEffect</p>
      <div ref={ref}></div>
      <p>{state}</p>
    </div>
  )
}

const UseLayoutEffect = () => {

  const [, setState] = useState<any>('hello world')

  const ref = useRef<any>(null)
  useLayoutEffect(() => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }
    ref.current.style.left = '500px';
    setState('hello world 12312312312321321321');
  }, [])

  return (
    <div className="box">
      <p>useLayoutEffect</p>
      <div ref={ref}></div>
      {/* <p>{state}</p> */}
    </div>
  )
}

export default () => {
  return (
    <>
      <UseEffect />
      <UseLayoutEffect />
    </>
  )
}