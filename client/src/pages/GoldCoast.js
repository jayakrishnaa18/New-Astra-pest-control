import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const GoldCoast = () => {
  return (
    <>
      <Helmet>
        <title>Pest Control Gold Coast | Termite Inspection & Treatment | Astra Pest Control</title>
        <meta name="description" content="Expert pest control services on the Gold Coast. Licensed technicians, 15+ years experience. Termite inspections, cockroach control, rodent removal. Same-day service. Call 0450 955 420 for free quote!" />
        <meta name="keywords" content="pest control Gold Coast, termite control Gold Coast, termite inspection Gold Coast, cockroach control Gold Coast, rodent control Gold Coast, spider control Gold Coast, bed bug treatment Gold Coast, ant control Gold Coast, pest exterminator Gold Coast, commercial pest control Gold Coast, residential pest control Gold Coast" />
        <link rel="canonical" href="https://www.astrapest.com.au/gold-coast" />
      </Helmet>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Gold Coast's #1 Pest Control Experts</h1>
              <p>Professional pest control and termite services across the Gold Coast and surrounding areas. Licensed technicians with 15+ years experience.</p>
              <div className="hero-buttons">
                <a href="tel:0450955420" className="cta-button primary">
                  📞 Call 0450 955 420
                </a>
                <a href="/contact" className="cta-button secondary">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>Gold Coast Pest Control Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>🐜 Termite Control Gold Coast</h3>
                <p>Comprehensive termite inspections and treatments for Gold Coast homes and businesses. Protect your coastal property.</p>
              </div>
              <div className="service-card">
                <h3>🪳 Cockroach Control</h3>
                <p>Effective cockroach elimination and prevention services across Gold Coast suburbs.</p>
              </div>
              <div className="service-card">
                <h3>🐭 Rodent Control</h3>
                <p>Safe and humane rodent removal and prevention for Gold Coast properties.</p>
              </div>
              <div className="service-card">
                <h3>🕷️ Spider Control</h3>
                <p>Professional spider control and web removal services throughout the Gold Coast.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="areas-section">
          <div className="container">
            <h2>Gold Coast Areas We Serve</h2>
            <div className="areas-grid">
              <div className="area-item">Surfers Paradise</div>
              <div className="area-item">Broadbeach</div>
              <div className="area-item">Southport</div>
              <div className="area-item">Robina</div>
              <div className="area-item">Burleigh Heads</div>
              <div className="area-item">Coolangatta</div>
              <div className="area-item">Nerang</div>
              <div className="area-item">Varsity Lakes</div>
              <div className="area-item">Mermaid Beach</div>
              <div className="area-item">Palm Beach</div>
              <div className="area-item">Currumbin</div>
              <div className="area-item">Tweed Heads</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Astra Pest Control Gold Coast?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>🏆 15+ Years Experience</h3>
                <p>Trusted pest control experts serving Gold Coast since 2008</p>
              </div>
              <div className="feature-item">
                <h3>✅ Licensed & Insured</h3>
                <p>Fully licensed technicians with comprehensive insurance</p>
              </div>
              <div className="feature-item">
                <h3>⚡ Same-Day Service</h3>
                <p>Fast response times for urgent Gold Coast pest problems</p>
              </div>
              <div className="feature-item">
                <h3>💯 Satisfaction Guarantee</h3>
                <p>100% satisfaction guarantee on all Gold Coast services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Get Your Free Gold Coast Pest Control Quote Today</h2>
            <p>Don't let pests ruin your Gold Coast lifestyle. Contact our expert team now!</p>
            <div className="cta-buttons">
              <a href="tel:0450955420" className="cta-button primary">
                📞 Call 0450 955 420
              </a>
              <a href="/contact" className="cta-button secondary">
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GoldCoast;
