import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <h2>KeenKeeper</h2>
        <p className="footer-subtitle">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <p className="footer-social-title">Social Links</p>
        <div className="footer-social">
          <a href="#" aria-label="Instagram" className="footer-icon">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook" className="footer-icon">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="X" className="footer-icon">
            <FaXTwitter />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
