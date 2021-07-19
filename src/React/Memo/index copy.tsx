import React, { useState, memo, useCallback, useMemo } from 'react';

const Child = memo(({ info }: any) => {
  console.log('我是子组件, 我重新渲染了')
  return <div>
    我是子组件: {info.name}

  </div>
})



export default function Memo() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('123');

  // const info = useMemo(() => ({ count, name }), [count, name])
  const info = { name }

  const handleParentClick = () => {
    setCount((state) => {
      return state + 1
    })
  }

  const handleChildClick = useCallback(
    () => {

    },
    [],
  )

  const changeName = () => {
    setName('456')
  }


  return (
    <div>
      我是父组件
      <button onClick={handleParentClick} >我是父组件按钮{count}</button>
      <button onClick={changeName} >改变子组件name</button>
      <Child info={info} onClick={handleChildClick} /> {/* count={count} */}
    </div>
  )
}