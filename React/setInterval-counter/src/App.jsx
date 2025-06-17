import { useState, useEffect} from 'react'

function App() {
  return (
    <>
    <h1>Counter</h1>
    <Counter></Counter>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function() {
    setInterval(function() {
      setCount(count => count + 1)
    }, 1000)
  }, [])


  return (
    <>
      <h1>{count}</h1>
    </>
  )
}


export default App
