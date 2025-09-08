import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import HireMe from './Components/HireMe'
import Main from './Pages/Main'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[76vh]">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-white/70 mb-2">Page Not Found</p>
      <p className="text-md text-white/50">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div className='w-full min-h-screen bg-[#181818] text-white overflow-x-hidden'>
        <HireMe />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
