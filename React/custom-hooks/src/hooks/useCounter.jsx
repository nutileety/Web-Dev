import { useState } from 'react'

export function useCounter() {
  const [count, setCounter] = useState(0)

  function increaseCount() {
    return setCounter(count + 1)
  }

  return {
    count, 
    increaseCount
  }
}