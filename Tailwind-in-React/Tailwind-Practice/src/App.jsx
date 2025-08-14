import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Otp } from './components/Otp'

function App() {
 const [name, setName] = useState('')

  return (
    <>
      <div class=" h-screen bg-teal-950 flex flex-col justify-center items-center ">
        <div class=" bg-teal-800/20 rounded-2xl pt-8 px-15 pb-14">
          <div className='text-teal-50 font-semibold text-center'>Verify with your Email</div>
          <Input type="text" onChange={(e)=>setName(e.target.value)} placeholder={'Enter the email'}></Input>
          <Otp />
          <Button isVisible={name !== ''}> Verify </Button>
        </div>   
      </div>
    </>
  )
}

export default App
