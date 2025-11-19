import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-modern">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <span className="hero-badge">Since 2008</span>
            <h1>About Astra Pest Control</h1>
            <p>Brisbane's Most Trusted Cleaning & Pest Control Experts</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story-modern">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" alt="Professional Cleaning" />
              <div className="story-badge-float">
                <div className="badge-number">15+</div>
                <div className="badge-label">Years Experience</div>
              </div>
            </div>
            <div className="story-text">
              <span className="section-label">Our Story</span>
              <h2>Leading Carpet Cleaning & Pest Control in Brisbane</h2>
              <p>Astra Pest Control was established over 15 years ago and operates as the leading carpet cleaning and pest control service in Brisbane, Ipswich, Gold & Sunshine Coast. Our clients are covered with full public liability insurance and all our products are environmentally friendly.</p>
              <p>We provide exceptional service to both residential and commercial customers across all areas of Brisbane, Ipswich, Gold & Sunshine Coast with a commitment to quality and customer satisfaction.</p>
              <div className="story-stats">
                <div className="stat-item">
                  <div className="stat-number">5000+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Guaranteed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="values-header">
            <span className="section-label">Our Values</span>
            <h2>Why Choose Astra Pest Control</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="#dc2626" strokeWidth="2"/>
                  <path d="M16 24L22 30L32 18" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>100% Guarantee</h3>
              <p>We guarantee to clean your carpets to Australian Standards with the utmost care and attention. Protected by $5 million public liability insurance.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4L28 16L40 18L32 26L34 38L24 32L14 38L16 26L8 18L20 16L24 4Z" stroke="#dc2626" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Premium Equipment</h3>
              <p>State-of-the-art truck mounted machines and portable equipment for high-rise buildings. Advanced technology for superior results.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="#dc2626" strokeWidth="2"/>
                  <path d="M24 12V24L32 28" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Fast Response</h3>
              <p>Same-day service available. We understand urgency and respond quickly to all cleaning and pest control emergencies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8C16 8 10 14 10 22C10 30 16 36 24 36C32 36 38 30 38 22C38 14 32 8 24 8Z" stroke="#dc2626" strokeWidth="2"/>
                  <path d="M24 16V22L28 26" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Eco-Friendly</h3>
              <p>All our cleaning and pest management products are safe for your family and pets. Environmentally responsible solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="12" width="32" height="28" rx="2" stroke="#dc2626" strokeWidth="2"/>
                  <path d="M16 12V8M32 12V8M8 20H40" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>15+ Years Experience</h3>
              <p>Established expertise in carpet steam cleaning, dry cleaning, and comprehensive pest control services across Brisbane.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4L30 18L44 20L34 30L36 44L24 36L12 44L14 30L4 20L18 18L24 4Z" stroke="#dc2626" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Certified Professionals</h3>
              <p>Fully trained and certified technicians. We stand by our work with confidence in our staff and equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="about-process">
        <div className="container">
          <div className="process-header">
            <span className="section-label">Our Process</span>
            <h2>How We Deliver Excellence</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Inspection & Assessment</h3>
              <p>Thorough evaluation of your carpets or pest situation to determine the best approach and treatment plan.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Professional Treatment</h3>
              <p>Using advanced equipment and eco-friendly products, we deliver superior cleaning and pest control results.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Quality Assurance</h3>
              <p>Final inspection to ensure exceptional results. We don't leave until you're completely satisfied.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Follow-Up Care</h3>
              <p>Ongoing support and maintenance advice to keep your home clean and pest-free long-term.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Astra Difference?</h2>
            <p>Join thousands of satisfied customers across Brisbane who trust us for their cleaning and pest control needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">Get Free Quote</Link>
              <a href="tel:0732455126" className="btn-cta-secondary">Call (07) 3245 5126</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
