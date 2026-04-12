import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" />
      <p className="footer__text">Liv de Vries</p>
      <p className="footer__copy">&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
