import { useState } from 'react'
import './App.css'
import { SidebarClass } from './componenets/sidebarClass'
import { SidebarToggle } from './icons/sidebarToggle'

function App() {
  const [ sidebarOpen, setSidebarOpen ] = useState(true)

  return (
    <>
      <div className='flex'>
        {/* <SidebarClass /> */}
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainContent /> 
      </div>
    </>
  )
}

function SideBar({sidebarOpen, setSidebarOpen}) {
  if(sidebarOpen) {
    return (
      <div className='transistion-all duration-1000 sm:w-56 bg-amber-200 w-0 h-screen'>
        <div className='top-0 left-0 cursor-pointer' onClick= { () => {
          setSidebarOpen(!sidebarOpen)
        }}>
          <SidebarToggle />
        </div> 
      </div>
    )
  }
  else{
    return (
      <div className='transtion-all duration-1000' onClick={ () => {
          setSidebarOpen(!sidebarOpen)
        }}>
        <div className='fixed left-0 top-0 cursor-pointer text-white' >
          <SidebarToggle />
        </div>
      </div>
    ) 
  }
}

function MainContent() {
  console.log("hi")

  return ( 
    <div className='w-full'>
      <div className='sm:h-30 sm:block hidden sm:bg-slate-950 col-span-11 '>

      </div>
      <div className='grid grid-cols-10 gap-5 p-7' >
        <div className='sm:h-72 sm:block hidden sm:bg-red-300 rounded-lg col-span-2 -translate-15 ml-12 pr-48'>
          
        </div>
        <div className='h-72 bg-teal-200 rounded-lg sm:col-span-5 col-span-11'>
          
        </div>
        <div className='h-72 bg-yellow-200 rounded-lg sm:col-span-3 col-span-11'>
          
        </div>
      </div>
    </div>
    
  )
}

export default App
