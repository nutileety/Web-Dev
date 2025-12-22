import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Button Counter</h1>
      <Counter count={count} setCount={setCount}></Counter>
    </>
  )
}

function Counter({count, setCount}) {
  

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
