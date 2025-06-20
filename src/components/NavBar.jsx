import '../App.css'
import { useNavigate, useLocation } from 'react-router-dom'

function NavBar({openModal}) {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <div className="NavBar">
      <div className="NavBarMenu">
        <span className={`underline ${isActive('/')}`} onClick={() => navigate('/')}>HOME</span>
        <span className={`underline ${isActive('/works')}`} onClick={() => navigate('/works')}>WORKS</span>
        <span className={`underline ${isActive('/cv')}`} onClick={() => navigate('/cv')}>CV</span>
      </div>
      <div className="NavBarContact">
        <span className="underline" onClick={openModal}>CONTACT</span>
      </div>
    </div>
  )
}

export default NavBar