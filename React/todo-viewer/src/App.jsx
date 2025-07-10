import { useState, useEffect } from 'react'

function Todo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0)
  const [todo, setTodo] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/'+inputValue)
      .then(async response => {
      const json = await response.json()
      setTodo(json) 
      })
  }, [count])

  return (
    <div>
      <div>
        <input type='text' onChange={(e)=>setInputValue(e.target.value)} placeholder='Enter only number'/>
      </div>
      <div>
        <button onClick={() => setCount(count+1)}>view todo</button> 
      </div>
      <div>
        {todo.title}
      </div>
    </div>
  )
}

function App() {

  return (
    <div>
      <Todo />
    </div>
  )
}

export default App
