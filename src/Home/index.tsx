import React from 'react';
import _ from 'lodash';

import { RxjsNav, ReactNav } from '../config';

import './style.sass'

export default function Home({ history }: any) {
  const handleClick = (record: any) => () => {
    console.log('fasfasfasfasf');
    history.push(record.value)
  }

  return (
    <div className="home">
      <h3>Rxjs</h3>
      <div className="wrap">
        {
          _.map(RxjsNav, (item) => {
            return <span onClick={handleClick(item)}>{item.value}</span>
          })
        }
      </div>
      <h3>React</h3>
      <div className="wrap">
        {
          _.map(ReactNav, (item) => {
            return <span onClick={handleClick(item)}>{item.value}</span>
          })
        }
      </div>
    </div>
  )
}