import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StickyCTA.css';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-cta ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-cta-content">
        <div className="sticky-cta-text">
          <span className="sticky-cta-title">Need Professional Service?</span>
          <span className="sticky-cta-subtitle">Get a free quote today</span>
        </div>
        <div className="sticky-cta-buttons">
          <a href="tel:0450955420" className="sticky-btn-call">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Now
          </a>
          <Link to="/contact" className="sticky-btn-quote">
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
