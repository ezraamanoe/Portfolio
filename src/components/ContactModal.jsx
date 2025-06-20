import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import '../App.css'

function ContactModal({ isOpen, onClose }) {
  const [fromEmail, setFromEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSend = () => {
    if (!fromEmail || !message) {
      setError('Please fill in all fields.')
      return
    }

    if (!validateEmail(fromEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setSending(true)

    emailjs.send(
        'service_5bu3xkb',
        'template_yy28csi',
        { from_email: fromEmail, message },
        'SgSJpOYfYWOP6LA-x'
    )
    .then(() => {
      setFromEmail('')
      setMessage('')
      setSending(false)
      onClose() // close the modal immediately after success
    })
    .catch(() => {
      setError('Failed to send. Try again later.')
      setSending(false)
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h3>Contact</h3>
              <button className="close-btn" onClick={onClose}>×</button>
            </div>

            <input
              className="modal-input"
              placeholder="From: (enter your email address)..."
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
            />
            <textarea
              className="modal-textarea"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && <p className="modal-error">{error}</p>}

            <div className="modal-footer">
              <button className="cancel-btn" onClick={onClose}>Cancel</button>
              <button className="send-btn" onClick={handleSend} disabled={sending}>
                {sending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal