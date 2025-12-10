import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ServicePages.css';

function PestControl() {
  const pests = [
    { name: 'Cockroaches', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>, desc: 'Complete cockroach elimination', link: '/blog/8' },
    { name: 'Termites', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Termite inspection & treatment', link: '/blog/15' },
    { name: 'Bed Bugs', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Thorough bed bug removal', link: '/blog/11' },
    { name: 'Spiders', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Safe spider control', link: '/blog/17' },
    { name: 'Rats', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Mice & rat extermination', link: '/blog/18' },
    { name: 'Fleas', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Complete flea treatment', link: '/blog/7' },
    { name: 'Silverfish', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Silverfish control', link: '/blog/9' },
    { name: 'Lice', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Lice treatment & prevention', link: '/blog/13' },
    { name: 'Carpet Beetles', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>, desc: 'Carpet beetle elimination', link: '/blog/19' }
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
      <Helmet>
        <title>Pest Control Brisbane & Gold Coast | Professional Pest Removal Services | Astra</title>
        <meta name="description" content="Professional pest control in Brisbane and Gold Coast. Cockroach, termite, rodent, spider & bed bug removal. Licensed technicians. Same-day service. Call 0450 955 420!" />
        <meta name="keywords" content="pest control Brisbane, pest control Gold Coast, pest removal Brisbane, pest removal Gold Coast, cockroach control, termite treatment, rodent control, spider removal, bed bug treatment" />
        <link rel="canonical" href="https://www.astrapest.com.au/pest-control" />
      </Helmet>
      
      <section className="pest-hero-enhanced">
        <div className="pest-hero-bg"></div>
        <div className="container">
          <div className="pest-hero-content">
            <span className="hero-badge-large">Professional Pest Control</span>
            <h1>Pest Control Brisbane & Gold Coast</h1>
            <p>Fast, reliable and safe pest removal for homes and businesses in Brisbane, Gold Coast and surrounding suburbs</p>
            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="feature-icon-hero"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                <span>Bond Back Guarantee</span>
              </div>
              <div className="hero-feature-item">
                <div className="feature-icon-hero"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                <span>Safe for Pets & Children</span>
              </div>
              <div className="hero-feature-item">
                <div className="feature-icon-hero"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
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
          <div className="services-grid-clean">
            {pests.map((pest, index) => (
              <Link to={pest.link} key={index} className="service-card-clean">
                <div className="service-card-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <h3>{pest.name}</h3>
                <p>{pest.desc}</p>
                <span className="card-arrow">→</span>
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
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                  <div>
                    <h4>Environmentally Safe</h4>
                    <p>Minimum product usage for maximum safety</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                  <div>
                    <h4>Professional Operators</h4>
                    <p>Trained and certified pest control experts</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
                  <div>
                    <h4>Fast Response</h4>
                    <p>Quick and effective pest elimination</p>
                  </div>
                </div>
                <div className="feature-item-clean">
                  <div className="feature-check"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg></div>
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
            <h2>Proudly Serving Brisbane, Gold Coast & Surrounding Areas</h2>
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
              <a href="tel:0450955420" className="btn-cta-secondary">Call 0450 955 420</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PestControl;
