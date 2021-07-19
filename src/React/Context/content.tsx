import { useContext } from 'react';

export default function Content({ MyContext }: any) {
  const context = useContext(MyContext);
  console.log(context, 'contextcontextcontextcontext');
  return <div>我是content</div>
}