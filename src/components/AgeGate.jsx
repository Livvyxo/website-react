import { motion } from 'framer-motion'
import './AgeGate.css'

export default function AgeGate({ onVerify }) {
  return (
    <motion.div
      className="age-gate"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        className="age-gate__card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="age-gate__line" />
        <h1 className="age-gate__title">Liv de Vries</h1>
        <p className="age-gate__sub">Exclusive Content</p>
        <div className="age-gate__divider" />
        <p className="age-gate__text">
          This website contains content intended for adults only.
          <br />
          You must be 18 or older to enter.
        </p>
        <div className="age-gate__buttons">
          <button className="age-gate__btn age-gate__btn--yes" onClick={onVerify}>
            I am 18+
          </button>
          <button
            className="age-gate__btn age-gate__btn--no"
            onClick={() => window.location.href = 'https://google.com'}
          >
            Leave
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
