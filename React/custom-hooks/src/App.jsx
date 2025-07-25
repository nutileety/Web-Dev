import { usePostTitle} from './hooks/usePostTitle'
import { useCounter } from './hooks/useCounter'
import { usePrev } from './hooks/usePrev'
import { useState } from 'react';

function App() {

  return (
    <div>
      <div>
        <CounterComponent />
      </div>
      <hr />
      <div>
        <PostComponent />
      </div>
      <hr />
      <div>
        <PrevComponent />
      </div>
      <hr />
    </div>
  )
}

export default App


function CounterComponent() {
  const {count, increaseCount} = useCounter();

  return (
    <div>
      <button onClick={increaseCount} >increase {count}</button>
    </div>
  )
}

function PostComponent(){
  const { post } = usePostTitle();

  return (
    <div >
      {post.title}
    </div>
  )
}

function PrevComponent() {
  const [num, setNum] = useState(0);
  const value = usePrev(num)

  return (
    <div>
      {num}
      <button onClick={() => setNum(num + 1)} > click </button>
      <p>The Previous value is {value}</p>
    </div>
  )
}
