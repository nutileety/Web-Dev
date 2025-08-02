import { RecoilRoot } from 'recoil'
import { Counter, Increase, IsEven, Decrease, Navigation} from './components'
import './App.css'

function App() {

  return (
    <>
      <RecoilRoot>
        <Navigation />
        <br />
        <hr/>
        <br />
        <Counter />
        <IsEven />
        <Increase />
        <Decrease />
      </RecoilRoot>
    </> 
  )
}



export default App
