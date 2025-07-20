import { useState, useContext, createContext } from 'react'

const BulbContext = createContext();

function BulbProvider({children}) {
  const [ bulbState, setBulbState ] = useState(true)
  
  return (
    <BulbContext.Provider 
    value = {{bulbState, setBulbState}} >
      {children}
    </BulbContext.Provider>
  )
}

function App() {
  
 return (
   <div>
      <BulbProvider >
        <LightBulb />
      </BulbProvider>
   </div>
  )
}

  
function LightBulb() {
  
  return (
    <div>
      <Bulb />
      <ToggleBulb />
    </div>
  )
}

function Bulb() {
  const { bulbState } = useContext(BulbContext)

  return (
    <div>
      {bulbState ? "Bulb ON" : "Bulb OFF"}
    </div>
  )
}

function ToggleBulb() {
  const {bulbState, setBulbState} = useContext(BulbContext)

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
