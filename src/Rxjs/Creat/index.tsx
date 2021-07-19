import React, { useEffect } from 'react';

import { Observable } from 'rxjs';
// import { creat } from 'rxjs/operators';

const Creat = (() => {

  useEffect(() => {
    Observable.create((observable: any) => {
      observable.next('123')
      observable.next('456')
      observable.next('789')
    }).subscribe((val: any) => console.log(val))
  }, [])


  return <span>creat</span>
})

export default Creat;