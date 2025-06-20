import '../App.css'
import { useEffect, useState } from 'react'

function Aside({openModal}) {
    const [time, setTime] = useState('00:00:00')

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
    return(
        <>
        <div className="MainContent">
            <div className="Profile-header">
                Ezra
                <br />
                Andhito
                <br />
                Manoe <span className="highlight">(SWE*)</span>
            </div>
            <div className="Profile">
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
                <span className="underline" onClick={openModal}>CONTACT</span>
            </div>
        </div>
        </>
    )
}
export default Aside