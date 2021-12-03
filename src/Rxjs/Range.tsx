import { useEffect } from 'react';

import { range } from 'rxjs';

const Range = (() => {
  useEffect(() => {
    range(1, 100).subscribe((val) => {
      console.log(val, new Date().getTime())
    })
  }, [])

  return null
})

export default Range;