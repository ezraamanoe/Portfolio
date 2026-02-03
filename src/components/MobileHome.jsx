import '../App.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MobileHome({openModal}) {
  const [time, setTime] = useState('00:00:00')
  const navigate = useNavigate()

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateClock() // initial call
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="MainContent">
        <div className="clock">{time}</div>
        <img className="MobileImage" src="/Hero.png" alt="Mobile" />
        <div className="header">(Portfolio*)</div>
        <div className="Profile-mobile">
          PROFILE
          <br />
          <a
    href="https://linkedin.com/in/ezramanoe"
    className="underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    linkedin.com/in/ezramanoe
  </a>
  <br />
  <a
    href="https://github.com/ezraamanoe"
    className="underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    github.com/ezraamanoe
  </a>
          <br />
          <br />
          I am a
          <span className="highlight"> Computer Science </span>
          student @ <span className="highlight">The University of Manchester </span>
          with a strong interdisciplinary interest in
          <span className="highlight"> music technology, software engineering, financial technology, and design.</span>
          <br />
          <br />
          Actively seeking opportunities to apply my skills in collaborative environments where I can continue
          to grow as a developer and creative technologist
          <br />
          <br />
          <br />
          <br />
          <div className="Buttons" onClick={() => navigate('/cv')}>
            <div className="Text">CV</div>
          </div>
          <br />
          <div className="Buttons">
            <div className="Text" onClick={openModal}>CONTACT ME</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileHome