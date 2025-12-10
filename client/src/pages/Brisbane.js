import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Home.css';

const Brisbane = () => {
  return (
    <>
      <Helmet>
        <title>Pest Control Brisbane | Termite Inspection & Treatment | Astra Pest Control</title>
        <meta name="description" content="Expert pest control services in Brisbane. Licensed technicians, 15+ years experience. Termite inspections, cockroach control, rodent removal. Same-day service. Call 0450 955 420 for free quote!" />
        <meta name="keywords" content="pest control Brisbane, termite control Brisbane, termite inspection Brisbane, cockroach control Brisbane, rodent control Brisbane, spider control Brisbane, bed bug treatment Brisbane, ant control Brisbane, pest exterminator Brisbane, commercial pest control Brisbane, residential pest control Brisbane" />
        <link rel="canonical" href="https://www.astrapest.com.au/brisbane" />
      </Helmet>

      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Brisbane's #1 Pest Control Experts</h1>
              <p>Professional pest control and termite services across Brisbane and surrounding suburbs. Licensed technicians with 15+ years experience.</p>
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
            <h2>Brisbane Pest Control Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>🐜 Termite Control Brisbane</h3>
                <p>Comprehensive termite inspections and treatments for Brisbane homes and businesses. Protect your property investment.</p>
              </div>
              <div className="service-card">
                <h3>🪳 Cockroach Control</h3>
                <p>Effective cockroach elimination and prevention services across Brisbane suburbs.</p>
              </div>
              <div className="service-card">
                <h3>🐭 Rodent Control</h3>
                <p>Safe and humane rodent removal and prevention for Brisbane properties.</p>
              </div>
              <div className="service-card">
                <h3>🕷️ Spider Control</h3>
                <p>Professional spider control and web removal services throughout Brisbane.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="areas-section">
          <div className="container">
            <h2>Brisbane Areas We Serve</h2>
            <div className="areas-grid">
              <div className="area-item">Brisbane CBD</div>
              <div className="area-item">South Brisbane</div>
              <div className="area-item">West End</div>
              <div className="area-item">Fortitude Valley</div>
              <div className="area-item">New Farm</div>
              <div className="area-item">Paddington</div>
              <div className="area-item">Milton</div>
              <div className="area-item">Toowong</div>
              <div className="area-item">St Lucia</div>
              <div className="area-item">Indooroopilly</div>
              <div className="area-item">Chermside</div>
              <div className="area-item">Aspley</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <h2>Why Choose Astra Pest Control Brisbane?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>🏆 15+ Years Experience</h3>
                <p>Trusted pest control experts serving Brisbane since 2008</p>
              </div>
              <div className="feature-item">
                <h3>✅ Licensed & Insured</h3>
                <p>Fully licensed technicians with comprehensive insurance</p>
              </div>
              <div className="feature-item">
                <h3>⚡ Same-Day Service</h3>
                <p>Fast response times for urgent Brisbane pest problems</p>
              </div>
              <div className="feature-item">
                <h3>💯 Satisfaction Guarantee</h3>
                <p>100% satisfaction guarantee on all Brisbane services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Get Your Free Brisbane Pest Control Quote Today</h2>
            <p>Don't let pests take over your Brisbane property. Contact our expert team now!</p>
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

export default Brisbane;
