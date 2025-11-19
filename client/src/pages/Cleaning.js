import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePages.css';

function Cleaning() {
  const services = [
    { name: 'Carpet Cleaning', icon: '🧹', link: '/cleaning/carpet-cleaning' },
    { name: 'Tile and Grout Cleaning', icon: '🔲', link: '/cleaning/tile-grout' },
    { name: 'Upholstery Cleaning', icon: '🛋️', link: '/cleaning/upholstery' },
    { name: 'Leather Seat Cleaning', icon: '💺', link: '/cleaning/leather' },
    { name: 'Mould Removal', icon: '🧪', link: '/cleaning/mould' },
    { name: 'Rug Cleaning', icon: '🎨', link: '/cleaning/rug' },
    { name: 'Cars, Caravans & Boats', icon: '🚗', link: '/cleaning/vehicles' },
    { name: 'Flood Water Extraction', icon: '💧', link: '/cleaning/flood' },
    { name: 'Commercial Carpet Cleaning', icon: '🏢', link: '/cleaning/commercial' },
    { name: 'Bond Cleaning', icon: '🏠', link: '/cleaning/bond' },
    { name: 'Mattress Cleaning', icon: '🛏️', link: '/cleaning/mattress' },
    { name: 'Carpet Protection', icon: '🛡️', link: '/cleaning/protection' }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <span className="hero-badge">Professional Services</span>
            <h1>Domestic & Commercial Cleaning</h1>
            <p>Low prices all year around! Don't overpay for quality!</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Our Services</span>
            <h2>Comprehensive Cleaning Solutions</h2>
            <p>Click on any service below to learn more about our professional cleaning solutions</p>
          </div>
          <div className="services-list-modern">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="service-list-item">
                <div className="service-item-icon">{service.icon}</div>
                <div className="service-item-content">
                  <h3>{service.name}</h3>
                  <span className="service-item-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-content">
              <span className="section-label">Why Choose Us</span>
              <h2>16 Years of Cleaning Excellence</h2>
              <p>Astra Pest Control can show you the best cleaning techniques, with 16 years of experience in all aspects of steam and low moisture dry cleaning in residential and commercial carpet cleaning.</p>
              <div className="features-list">
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Full Pre-Treatment</h4>
                    <p>Complete stain treatment, not just spot cleaning</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>State-of-the-Art Equipment</h4>
                    <p>Powerful truck-mounted and portable machines</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Fast Drying Times</h4>
                    <p>Advanced technology for quick turnaround</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>100% Satisfaction Guarantee</h4>
                    <p>All work guaranteed with our quality promise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80" alt="Professional Cleaning Equipment" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Our Process</span>
            <h2>How We Clean</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Pre-Vacuum</h3>
              <p>Full pre-vacuum of carpets to remove loose dirt stuck deep in carpet fibres</p>
            </div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>Pre-Treatment</h3>
              <p>Complete stain treatment using professional-grade products</p>
            </div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Deep Clean</h3>
              <p>Steam or dry clean using powerful truck-mounted machines</p>
            </div>
            <div className="process-card">
              <div className="process-number">04</div>
              <h3>Sanitize & Protect</h3>
              <p>Deodorize and protect using eco-friendly products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-content">
            <span className="section-label">Our Products</span>
            <h2>Professional-Grade Cleaning Solutions</h2>
            <p>At Astra Pest Control, we understand that our customers want to know all about the products we use in their home. We choose to use a selection of professional products put together over years of experience.</p>
            <div className="products-features">
              <div className="product-feature">
                <div className="product-icon">🌿</div>
                <h4>Environmentally Friendly</h4>
                <p>Safe for your family and pets</p>
              </div>
              <div className="product-feature">
                <div className="product-icon">🧪</div>
                <h4>Professional Grade</h4>
                <p>Industry-leading cleaning solutions</p>
              </div>
              <div className="product-feature">
                <div className="product-icon">✨</div>
                <h4>Odourless</h4>
                <p>No harsh chemical smells</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas-section">
        <div className="container">
          <div className="service-areas-content">
            <h2>Serving All Major Cities</h2>
            <p>Brisbane • Darwin • Adelaide • Melbourne • Sydney • Perth • Sunshine Coast • Gold Coast • Ipswich</p>
            <p className="areas-subtitle">Commercial and general cleaning available - day or night cleans including hard floor and tile & grout cleaning</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready for Professional Cleaning?</h2>
            <p>Get a free quote today and experience the Astra difference</p>
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

export default Cleaning;
