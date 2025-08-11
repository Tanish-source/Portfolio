import Navbar from './Components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import HireMe from './Components/HireMe'
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation();

  return (
    <>
      <div className='w-full min-h-screen bg-[#1b1b1b] text-white overflow-x-hidden'>
        <HireMe />
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default App
