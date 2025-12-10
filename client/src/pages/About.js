import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero-modern">
        <div className="hero-particles"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-badge-animated">
              <span className="badge-pulse"></span>
              Since 2008
            </div>
            <h1 className="glitch-text">About Astra Pest Control</h1>
            <p>Brisbane & Gold Coast's Most Trusted Pest & Termite Control Experts</p>
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="stat-value" data-target="15">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="stat-value" data-target="10000">10K+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="stat-value">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="stat-value">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-modern">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-wrapper">
              <div className="image-frame">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80" alt="Professional Team" />
                <div className="image-overlay-pattern"></div>
              </div>
              <div className="floating-badge">
                <div className="badge-content">
                  <div className="badge-number">15+</div>
                  <div className="badge-text">Years</div>
                </div>
              </div>
            </div>
            <div className="story-text">
              <span className="section-label-modern">Our Story</span>
              <h2>Leading Pest & Termite Control in Brisbane & Gold Coast</h2>
              <p>Astra Pest Control was established over 15 years ago and operates as the leading pest and termite control service in Brisbane, Gold Coast and surrounding suburbs.</p>
              <p>Our clients are covered with full public liability insurance and all our products are environmentally friendly. We provide exceptional service to both residential and commercial customers.</p>
              
              <div className="features-modern">
                <div className="feature-modern">
                  <div className="feature-icon-modern">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Fully Insured</h4>
                    <p>Complete public liability coverage</p>
                  </div>
                </div>
                <div className="feature-modern">
                  <div className="feature-icon-modern">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Eco-Friendly</h4>
                    <p>Environmentally safe products</p>
                  </div>
                </div>
                <div className="feature-modern">
                  <div className="feature-icon-modern">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Fast Service</h4>
                    <p>Same day availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section-modern">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-modern">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid-modern">
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our service or products</p>
            </div>
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
              </div>
              <h3>Customer Trust</h3>
              <p>Building lasting relationships through honest service</p>
            </div>
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
              </div>
              <h3>Excellence</h3>
              <p>Striving for perfection in every job we undertake</p>
            </div>
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    <path d="M2 12h20"/>
                  </svg>
                </span>
              </div>
              <h3>Sustainability</h3>
              <p>Protecting the environment for future generations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-modern">Our Location</span>
            <h2>Serving Brisbane, Gold Coast & Surrounding Areas</h2>
            <p>Proudly serving Brisbane, Gold Coast, Logan, Ipswich, Redlands, Moreton Bay, Scenic Rim, and all surrounding suburbs</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0726046149!2d152.8412!3d-27.4698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%" 
              height="500" 
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Brisbane Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="cta-about-modern">
        <div className="container">
          <div className="cta-content-modern">
            <h2>Ready to Experience the Difference?</h2>
            <p>Join thousands of satisfied customers across Brisbane, Gold Coast and surrounding suburbs</p>
            <div className="cta-buttons-modern">
              <a href="tel:0450955420" className="btn-modern-primary">
                <span className="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                <span>Call 0450 955 420</span>
              </a>
              <Link to="/contact" className="btn-modern-secondary">
                <span>Get Free Quote</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
