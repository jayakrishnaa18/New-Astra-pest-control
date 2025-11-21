import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePages.css';

function PestControl() {
  const pests = [
    { name: 'Cockroaches', icon: '🪳', desc: 'Complete cockroach elimination', link: '/blog/12' },
    { name: 'Termites', icon: '🐜', desc: 'Termite inspection & treatment', link: '/blog/17' },
    { name: 'Bed Bugs', icon: '🐛', desc: 'Thorough bed bug removal', link: '/blog/15' },
    { name: 'Spiders', icon: '🕷️', desc: 'Safe spider control', link: '/blog/14' },
    { name: 'Rats', icon: '🐀', desc: 'Mice & rat extermination', link: '/blog/16' },
    { name: 'Fleas', icon: '🦟', desc: 'Complete flea treatment', link: '/blog/11' },
    { name: 'Silverfish', icon: '🐟', desc: 'Silverfish control', link: '/blog/13' },
    { name: 'Lice', icon: '🦠', desc: 'Lice treatment & prevention', link: '/blog/18' },
    { name: 'Carpet Beetles', icon: '🪲', desc: 'Carpet beetle elimination', link: '/blog/19' }
  ];

  const products = [
    {
      name: 'MAXFORCE GOLD',
      description: 'Gel formulation for cockroach control in residential and commercial areas',
      image: '/maxforce-box.png'
    },
    {
      name: 'BIFLEX AQUA',
      description: 'Advanced water based termiticide and general insecticide',
      image: '/biflex-aquamax.png'
    },
    {
      name: 'COOPEX DUST',
      description: 'Control of cockroaches, ants, fleas, silverfish and bed bugs',
      image: '/coopex-bucket.png'
    }
  ];

  return (
    <div className="service-page">
      <section className="pest-hero-enhanced">
        <div className="pest-hero-bg"></div>
        <div className="container">
          <div className="pest-hero-content">
            <span className="hero-badge-large">Professional Pest Control</span>
            <h1>Pest Control Brisbane</h1>
            <p>Fast, reliable and safe pest removal for homes and businesses across Brisbane</p>
            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="feature-icon-hero">✓</div>
                <span>Bond Back Guarantee</span>
              </div>
              <div className="hero-feature-item">
                <div className="feature-icon-hero">✓</div>
                <span>Safe for Pets & Children</span>
              </div>
              <div className="hero-feature-item">
                <div className="feature-icon-hero">✓</div>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
            <div className="hero-cta-buttons">
              <Link to="/contact" className="btn-hero-primary">Get Free Quote</Link>
              <a href="tel:0732455126" className="btn-hero-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call (07) 3245 5126
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="special-offer-banner">
        <div className="container">
          <div className="offer-content">
            <div className="offer-badge">Special Offer</div>
            <h3>Move Out Pest Control - Only $35</h3>
            <p>When booked with carpet cleaning service</p>
          </div>
        </div>
      </section>

      <section className="pests-section-enhanced">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Pest Solutions</span>
            <h2>Complete Pest Management</h2>
            <p>Expert treatment for all common household and commercial pests</p>
          </div>
          <div className="pests-grid-enhanced">
            {pests.map((pest, index) => (
              <Link to={pest.link} key={index} className="pest-link-card">
                <div className="pest-card-icon">{pest.icon}</div>
                <span className="pest-card-name">{pest.name}</span>
                <p className="pest-card-desc">{pest.desc}</p>
                <div className="pest-card-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pest-why-choose">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-content">
              <span className="section-label">Why Choose Us</span>
              <h2>Professional Pest Control You Can Trust</h2>
              <p>We provide fast, reliable, effective and hassle-free pest control service. Our commitment to protecting the environment and our outstanding safety record means you can trust Astra Pest Control to deal with any problem, large or small.</p>
              <p>We always aim to use the minimum amount of products possible so it's safe to call us even if you have pets or small children in the house.</p>
              <div className="features-list">
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Environmentally Safe</h4>
                    <p>Minimum product usage for maximum safety</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Professional Operators</h4>
                    <p>Trained and certified pest control experts</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Fast Response</h4>
                    <p>Quick and effective pest elimination</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check">✓</div>
                  <div>
                    <h4>Guaranteed Results</h4>
                    <p>Bond back guarantee for rental properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" alt="Professional Pest Control" />
              <div className="image-badge">
                <div className="badge-text">15+</div>
                <div className="badge-subtext">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pest-products-section">
        <div className="container">
          <div className="section-intro">
            <span className="section-label">Our Products</span>
            <h2>Professional Pest Management Products</h2>
            <p>We use only the highest quality, industry-approved products for effective and safe pest control</p>
          </div>
          <div className="products-grid-pest">
            {products.map((product, index) => (
              <div key={index} className="product-card-pest">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-header">
                  <h3>{product.name}</h3>
                </div>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-areas-section">
        <div className="container">
          <div className="service-areas-content">
            <h2>Serving All Major Cities</h2>
            <p>Brisbane • Gold Coast • Sunshine Coast • Ipswich • Sydney • Melbourne • Adelaide • Darwin • Perth</p>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Need Pest Control Services?</h2>
            <p>Get a free quote today and protect your home from unwanted pests</p>
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

export default PestControl;
