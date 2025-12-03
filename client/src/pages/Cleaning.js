import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePages.css';

function Cleaning() {
  const ServiceIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
    </svg>
  );

  const services = [
    { name: 'Carpet Cleaning', desc: 'Deep steam cleaning for all carpet types', link: '/cleaning/carpet-cleaning' },
    { name: 'Tile and Grout Cleaning', desc: 'Restore shine to tiles and grout', link: '/cleaning/tile-grout' },
    { name: 'Upholstery Cleaning', desc: 'Professional furniture cleaning', link: '/cleaning/upholstery' },
    { name: 'Leather Seat Cleaning', desc: 'Specialized leather care', link: '/cleaning/leather' },
    { name: 'Mould Removal', desc: 'Safe mould treatment and prevention', link: '/cleaning/mould' },
    { name: 'Rug Cleaning', desc: 'Gentle cleaning for delicate rugs', link: '/cleaning/rug' },
    { name: 'Cars, Caravans & Boats', desc: 'Mobile vehicle cleaning service', link: '/cleaning/vehicles' },
    { name: 'Flood Water Extraction', desc: 'Emergency water removal', link: '/cleaning/flood' },
    { name: 'Commercial Carpet Cleaning', desc: 'Business cleaning solutions', link: '/cleaning/commercial' },
    { name: 'Bond Cleaning', desc: 'End of lease cleaning guarantee', link: '/cleaning/bond' },
    { name: 'Mattress Cleaning', desc: 'Hygienic mattress deep cleaning', link: '/cleaning/mattress' },
    { name: 'Carpet Protection – Upholstery Protection', desc: 'Stain protection treatment', link: '/cleaning/protection' },
    { name: 'Encapsulation Low Moisture Cleaning', desc: 'Low moisture dry cleaning method', link: '/cleaning/encapsulation' },
    { name: 'Carpet Repairs – Upholstery Repairs', desc: 'Professional carpet repair service', link: '/cleaning/repairs' },
    { name: 'Duo Carpet Cleaning System for High Rise Apartments', desc: 'High rise apartment specialist', link: '/cleaning/duo-system' }
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
          <div className="services-grid-clean">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="service-card-clean">
                <div className="service-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <span className="card-arrow">→</span>
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
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                  <div>
                    <h4>Full Pre-Treatment</h4>
                    <p>Complete stain treatment, not just spot cleaning</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                  <div>
                    <h4>State-of-the-Art Equipment</h4>
                    <p>Powerful truck-mounted and portable machines</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                  <div>
                    <h4>Fast Drying Times</h4>
                    <p>Advanced technology for quick turnaround</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
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
                <div className="product-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Environmentally Friendly</h4>
                <p>Safe for your family and pets</p>
              </div>
              <div className="product-feature">
                <div className="product-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11a3 3 0 106 0 3 3 0 00-6 0z"/>
                    <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <h4>Professional Grade</h4>
                <p>Industry-leading cleaning solutions</p>
              </div>
              <div className="product-feature">
                <div className="product-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
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
