import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          </button>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className={isScrolled ? 'scrolled' : ''}>
              Home
              <span className="nav-underline"></span>
            </Link>
            
            <Link to="/cleaning" className={isScrolled ? 'scrolled' : ''}>
              Cleaning
              <span className="nav-underline"></span>
            </Link>

            <Link to="/pest-control" className={isScrolled ? 'scrolled' : ''}>
              Pest Control
              <span className="nav-underline"></span>
            </Link>

            <Link to="/about" className={isScrolled ? 'scrolled' : ''}>
              About
              <span className="nav-underline"></span>
            </Link>
            <Link to="/hints-tips" className={isScrolled ? 'scrolled' : ''}>
              Hints & Tips
              <span className="nav-underline"></span>
            </Link>
            <Link to="/faq" className={isScrolled ? 'scrolled' : ''}>
              FAQ
              <span className="nav-underline"></span>
            </Link>
            <Link to="/blog" className={isScrolled ? 'scrolled' : ''}>
              Blog
              <span className="nav-underline"></span>
            </Link>
            <Link to="/contact" className={isScrolled ? 'scrolled' : ''}>
              Contact
              <span className="nav-underline"></span>
            </Link>
            
            <Link to="/contact" className={`book-online-btn ${isScrolled ? 'scrolled' : ''}`}>
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
