import React from 'react';
import QuoteForm from '../components/QuoteForm';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page-pro">
      {/* Hero Section */}
      <section className="contact-hero-pro">
        <div className="hero-particles"></div>
        <div className="container">
          <div className="hero-content-pro">
            <span className="hero-badge-pro">Contact Us</span>
            <h1>Let's Work Together</h1>
            <p>Get in touch with Brisbane & Gold Coast's most trusted pest and termite control experts</p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="quick-contact">
        <div className="container">
          <div className="quick-cards">
            <a href="tel:0450955420" className="quick-card">
              <div className="quick-icon phone-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="quick-content">
                <h3>Call Us Now</h3>
                <p>0450 955 420</p>
                <span className="quick-badge">Available 24/7</span>
              </div>
            </a>

            <a href="mailto:Astrapestcontrol.au@gmail.com" className="quick-card">
              <div className="quick-icon email-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="quick-content">
                <h3>Email Us</h3>
                <p>Astrapestcontrol.au@gmail.com</p>
                <span className="quick-badge">Reply within 24hrs</span>
              </div>
            </a>

            <div className="quick-card">
              <div className="quick-icon time-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="quick-content">
                <h3>Business Hours</h3>
                <p>Mon-Fri: 7AM - 6PM</p>
                <span className="quick-badge">Sat: 8AM - 4PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main-pro">
        <div className="container">
          <div className="contact-wrapper">
            {/* Left - Form */}
            <div className="form-section-pro">
              <QuoteForm />
            </div>

            {/* Right - Info & Map */}
            <div className="info-section-pro">
              {/* Service Areas */}
              <div className="info-card-pro areas-card">
                <div className="card-icon-pro">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Service Areas</h3>
                <div className="areas-list">
                  <span className="area-tag">Brisbane, Gold Coast & Surrounding Suburbs</span>
                </div>
                <p className="areas-note">Serving the local community with expert pest and termite control</p>
              </div>

              {/* Why Choose Us */}
              <div className="info-card-pro features-card">
                <h3>Why Choose Astra?</h3>
                <ul className="features-list-pro">
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>15+ Years Experience</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>100% Satisfaction Guarantee</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>Same Day Service Available</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>Eco-Friendly Products</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>Licensed & Insured</span>
                  </li>
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
                    </svg>
                    <span>Free Quotes & Advice</span>
                  </li>
                </ul>
              </div>

              {/* Emergency CTA */}
              <div className="info-card-pro emergency-card">
                <div className="emergency-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3>Need Emergency Service?</h3>
                <p>We're available 24/7 for urgent pest control and flood extraction services</p>
                <a href="tel:0450955420" className="emergency-btn">
                  Call Now: 0450 955 420
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section-pro">
        <div className="container">
          <div className="map-header-pro">
            <h2>Find Us</h2>
            <p>Proudly serving Brisbane, Gold Coast and surrounding suburbs</p>
          </div>
          <div className="map-container-pro">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0726046149!2d152.8412!3d-27.4698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Areas Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
