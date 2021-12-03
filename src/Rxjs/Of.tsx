import { useEffect } from 'react';

import { of } from 'rxjs';

const Of = (() => {
  useEffect(() => {
    of(1, 2, 3).subscribe((val) => {
      console.log(val)
    })
  }, [])

  return null
})

export default Of;