import { useState, useEffect} from 'react'

function App() {
  const [isVisible, setVisible] = useState(true);

  useEffect(function() {
    setInterval(function() {
      setVisible(c=>!c)
    }, 5000)
  }, [])

  return (
    <>
    <h1>Counter</h1>
    {isVisible&&<Counter></Counter>}
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function() {
    console.log(" counter Mouted");
    const clock = setInterval(function() {
      console.log("Inside the setIntervals");
      setCount(c => c + 1)
    }, 1000)

    return function() {
      clearInterval(clock)
    }
  }, [])

  return (
    <>
      <h1>{count}</h1>
    </>
  )
}


export default App
