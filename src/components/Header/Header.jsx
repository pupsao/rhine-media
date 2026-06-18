import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <div className="logo-mark">RM</div>
            <div className="logo-name">Rhine <span>Media</span></div>
          </Link>

          <ul className="nav-links">
            <li><Link to="/#verticals">Verticals</Link></li>
            <li><Link to="/#traffic">Traffic Sources</Link></li>
            <li><Link to="/#partners">Partners</Link></li>
            <li><Link to="/#why-us">Why Us</Link></li>
            <li><Link to="/contact" style={location.pathname === '/contact' ? { color: '#eab24a' } : {}}>Contact</Link></li>
          </ul>

          <div className="nav-right">
            {location.pathname === '/contact' ? (
              <Link to="/" className="btn btn-ghost">Back to Home</Link>
            ) : (
              <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
            )}
            <Link to={location.pathname === '/contact' ? '/contact#contact-form' : '/contact'} className="btn btn-primary">Send Message</Link>
            <button 
              className="hamburger" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu open">
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
          <Link to="/#verticals" onClick={closeMenu}>Verticals</Link>
          <Link to="/#traffic" onClick={closeMenu}>Traffic Sources</Link>
          <Link to="/#partners" onClick={closeMenu}>Partners</Link>
          <Link to="/#why-us" onClick={closeMenu}>Why Us</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to={location.pathname === '/contact' ? '/contact#contact-form' : '/contact'} className="btn btn-primary" style={{ marginTop: '14px' }} onClick={closeMenu}>Send Message</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
