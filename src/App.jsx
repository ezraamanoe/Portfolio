import { useState, useEffect } from 'react'
import MainContent from './components/MainContent'
import Aside from './components/Aside'
import Sidebar from './components/Sidebar'
import MobileHome from './components/MobileHome'
import NavBar from './components/NavBar'
import ContactModal from './components/ContactModal'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

function App() {
  const width = useWindowWidth()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <Router>
      <ContactModal isOpen={isModalOpen} onClose={closeModal}/>

      <Routes>
        {width < 768 ? (
          <>
            <Route path="/" element={<MobileHome openModal={openModal}/>} />
            <Route path="/works" element={<><MainContent openModal={openModal}/><NavBar openModal={openModal} /></>} />
            <Route path="/cv" element={<><Sidebar openModal={openModal}/><NavBar openModal={openModal}/></>} />
          </>
        ) : (
          <Route path="/" element={
            <>
              <div className="Wrapper">
                <Aside openModal={openModal} />
                <MainContent />
                <Sidebar />
              </div>
            </>
          } />
        )}
      </Routes>
    </Router>
  )
}

export default App