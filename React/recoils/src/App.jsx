
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'


const count = atom({
  key: "count",
  default: 0
})

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter />
        <Increase />
        <Decrease />
      </RecoilRoot>
    </> 
  )
}

function Counter() {
  const currentCount = useRecoilValue(count)

  return (
    <div>
      {currentCount}
    </div>
  )
}

function Increase() {
  const setCount = useSetRecoilState(count)

  return (
    <div>
      <button onClick={() => setCount(count => count+1)} >Increase</button>
    </div>
  )
}

function Decrease() {
  const setCount = useSetRecoilState(count)

  return (
    <div>
      <button onClick={() => setCount(count => count-1)} >Decrease</button>
    </div>
  )
}

export default App
