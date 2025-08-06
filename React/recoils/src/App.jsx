import { RecoilRoot } from 'recoil'
import { Counter, Increase, IsEven, Decrease, Navigation, Todo} from './components'
import './App.css'

function App() {

  return (
    <>
      <RecoilRoot>
        <h2>The Navigation Bar(Notifications)</h2>
        <Navigation />
        <br />
        <hr/>
        <br />
        <h2> Counter </h2>
        <Counter />
        <IsEven />
        <Increase />
        <Decrease />
        <br />
        <hr/>
        <br />
        <h2>Accessing Todo</h2>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </> 
  )
}



export default App
