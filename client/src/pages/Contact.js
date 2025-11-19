import React from 'react';
import QuoteForm from '../components/QuoteForm';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <span className="hero-badge">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>Get a free quote or book our professional cleaning and pest control services</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="#dc2626" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Phone</h3>
                <a href="tel:0732455126" className="info-link">(07) 3245 5126</a>
                <p>Available 24/7 for emergencies</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#dc2626" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <a href="mailto:info@best1cleaning.com" className="info-link">info@best1cleaning.com</a>
                <p>We'll respond within 24 hours</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="#dc2626" strokeWidth="2"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="#dc2626" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Service Area</h3>
                <p className="info-text">Brisbane, Ipswich, Gold Coast, Sunshine Coast and surrounding suburbs</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#dc2626" strokeWidth="2"/>
                    <path d="M12 7v5l3 3" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Business Hours</h3>
                <p className="info-text">Monday - Friday: 7:00 AM - 6:00 PM<br/>Saturday: 8:00 AM - 4:00 PM<br/>Sunday: Emergency only</p>
              </div>
            </div>

            {/* Quote Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Get A Free Quote</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Call us now for immediate assistance or emergency services</p>
            <a href="tel:0732455126" className="btn-cta-large">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call (07) 3245 5126
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
