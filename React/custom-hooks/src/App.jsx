import { useCounter } from '../hooks/useCounter'

function App() {
  const {count, increaseCount} = useCounter();

  return (
    <div>
      <button onClick={increaseCount} >increase {count}</button>
    </div>
  )
}

export default App
