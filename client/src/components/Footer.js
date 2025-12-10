import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-logo">Astra Pest Control</h3>
              <p className="footer-desc">Brisbane & Gold Coast's trusted pest and termite control experts since 2008. Professional service with guaranteed results.</p>
              <div className="footer-contact">
                <a href="tel:0450955420" className="footer-phone">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  0450 955 420
                </a>
                <a href="mailto:Astrapestcontrol.au@gmail.com" className="footer-email">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Astrapestcontrol.au@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cleaning">Cleaning Services</Link></li>
                <li><Link to="/pest-control">Pest Control</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/pest-control">General Pest Control</Link></li>
                <li><Link to="/blog/15">Termite Inspection</Link></li>
                <li><Link to="/blog/15">Termite Treatment</Link></li>
                <li><Link to="/blog/8">Cockroach Control</Link></li>
                <li><Link to="/blog/18">Rodent Control</Link></li>
                <li><Link to="/blog/11">Bed Bug Treatment</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Service Areas</h4>
              <p className="service-areas">Brisbane, Gold Coast and surrounding suburbs including Logan, Ipswich, Redlands, Moreton Bay, Scenic Rim, and all greater Brisbane and Gold Coast areas.</p>
              <div className="footer-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0726046149!2d152.8412!3d-27.4698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%" 
                  height="150" 
                  style={{border: 0, borderRadius: '8px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Best 1 Cleaning Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Astra Pest Control. All rights reserved.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/BestoneCarpetCleaningPestControl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com/best1cleaning" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/user/best1cleaning" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.google.com/search?q=Astra+Pest+Control+Brisbane" target="_blank" rel="noopener noreferrer" aria-label="Google">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
