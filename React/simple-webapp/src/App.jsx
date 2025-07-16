import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import LandingPage from '../pages/langingPage'
import Class11 from '../pages/class11'
import Class12 from '../pages/class12'
import NoPage from '../pages/noPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ height: "100vh", backgroundColor: "pink"}}>
          <Header />
            <div style = {{ height: "90vh", alignContent: 'center', backgroundColor:"gray" }}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/neet" element={<Layouts />} >
                  <Route path="/neet/class-11" element={<Class11 />} />
                  <Route path="/neet/class-12" element={<Class12 />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

function Layouts() {
  return (
    <Outlet />
  )
}

function Header() {
  return(
    <>
      <Link to="/"> HOME </Link>
      |
      <Link to="/neet/class-11"> Class-11 </Link>
      |
      <Link to="/neet/class-12"> Class-12 </Link>
    </>
  )
}

function Footer() {
  return (
    <div>Footer | Contact</div>
  )
}

export default App
