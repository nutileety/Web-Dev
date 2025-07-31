import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/atomCounter'
import './App.css'

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter />
        <IsEven />
        <Increase />
        <Decrease />
      </RecoilRoot>
    </> 
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom)

  return (
    <div>
      {count}
    </div>
  )
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector)

  return (
    <div>
      {isEven ? 'Even' : 'Odd'}
    </div>
  )
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => setCount(count => count + 2)} >Increase </button>
    </div>
  )
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)} >Decrease</button>
    </div>
  )
}


export default App
