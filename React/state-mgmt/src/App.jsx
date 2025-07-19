import { useState } from 'react'

function App() {

 return (
   <div>
      <LightBulb />
   </div>
  )
}

  
function LightBulb() {
  const [ bulbState, setBulbState ] = useState(true)

  return (
    <div>
      <Bulb  bulbState={bulbState} />
      <ToggleBulb bulbState={bulbState} setBulbState={setBulbState} />
    </div>
  )
}

function Bulb({bulbState}) {
  
  return (
    <div>
      {bulbState ? "Bulb ON" : "Bulb OFF"}
    </div>
  )
}

function ToggleBulb({bulbState, setBulbState}) {

  function toggle() {
    return setBulbState(!bulbState)
  }

  return (
    <div>
      <button onClick={toggle} >Toggle on/off</button>
    </div>
  )
}


export default App
