import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Astra Pest Control" className={isScrolled ? 'logo-scrolled' : ''} />
            </Link>
          </div>

          <button className={`mobile-toggle ${isScrolled ? 'scrolled' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'active' : ''}`}>
              Home
              <span className="nav-underline"></span>
            </Link>
            
            <Link to="/cleaning" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/cleaning' ? 'active' : ''}`}>
              Cleaning
              <span className="nav-underline"></span>
            </Link>

            <Link to="/pest-control" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/pest-control' ? 'active' : ''}`}>
              Pest Control
              <span className="nav-underline"></span>
            </Link>

            <Link to="/about" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/about' ? 'active' : ''}`}>
              About
              <span className="nav-underline"></span>
            </Link>
            <Link to="/hints-tips" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/hints-tips' ? 'active' : ''}`}>
              Hints & Tips
              <span className="nav-underline"></span>
            </Link>
            <Link to="/faq" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/faq' ? 'active' : ''}`}>
              FAQ
              <span className="nav-underline"></span>
            </Link>
            <Link to="/blog" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/blog' ? 'active' : ''}`}>
              Blog
              <span className="nav-underline"></span>
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
              <span className="nav-underline"></span>
            </Link>
            
            <Link to="/contact" onClick={closeMobileMenu} className={`book-online-btn ${isScrolled ? 'scrolled' : ''}`}>
              <span>Book Online</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="cta-overlay"></div>
            </Link>
          </nav>
        </div>
      </header>

      <div className={`mobile-backdrop ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
    </>
  );
}

export default Header;
