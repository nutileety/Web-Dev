import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import LandingPage from '../pages/langingPage'
import Class11 from '../pages/class11'
import Class12 from '../pages/class12'
import NoPage from '../pages/noPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/class-11" element={<Class11 />} />
            <Route path="/class-12" element={<Class12 />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layouts() {
  return (
    <div style={{ height: "100vh", backgroundColor: "pink"}}>
      <Header />
      <div style = {{ height: "90vh", alignContent: 'center', backgroundColor:"gray" }}>
        <Outlet />
      </div>
      Footer | Contact
    </div>
  )
}

function Header() {
  return(
    <>
      <Link to="/"> HOME </Link>
      |
      <Link to="/class-11"> Class-11 </Link>
      |
      <Link to="class-12"> Class-12 </Link>
    </>
  )
}

export default App
