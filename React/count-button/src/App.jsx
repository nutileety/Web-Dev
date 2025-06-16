import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  console.log("count", count);
  console.log("set count", setCount);

  function onClickHandler(){
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={onClickHandler}>
        count is {count}
      </button>
    </div>
    );
}
