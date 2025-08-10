import './App.css'
import { Button } from './components/Button'

function App() {
 

  return (
    <>
      <div class="flex flex-row min-h-screen justify-center items-center">
        <div class="text-teal-100"> The responsive grid </div>
        <div>
          <div>Verify with your Name</div>
          <input onChange={""} placeholder='Enter your Name'></input>
          <Button></Button>
        </div>
      </div>
    </>
  )
}

export default App
