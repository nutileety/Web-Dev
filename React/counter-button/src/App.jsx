import { useState } from 'react'

function App() {
  return (
    <>
      <h1>Button Counter</h1>
      <Counter></Counter>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  function resetCount() {
    setCount(0)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase count</button>
      <button onClick={decreaseCount}>decrease count</button>
      <button onClick={resetCount}>reset count</button>
    </div>
  )
}

export default App
