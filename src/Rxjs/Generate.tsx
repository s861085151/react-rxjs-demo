import { useEffect } from 'react';

import { generate } from 'rxjs';

const Generate = (() => {
  useEffect(() => {
    generate(
      1,
      (val) => val < 100,
      (val) => val + 1,
      (val) => val
    ).subscribe((val) => {
      console.log(val, new Date().getTime())
    })
  }, [])

  return null
})

export default Generate;