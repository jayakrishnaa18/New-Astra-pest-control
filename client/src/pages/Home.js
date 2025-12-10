import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reviews from '../components/Reviews';
import './Home.css';

function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="home">
      <Helmet>
        <title>Pest Control Brisbane & Gold Coast | Termite Inspection & Treatment | Astra Pest Control</title>
        <meta name="description" content="Expert pest control & termite services in Brisbane and Gold Coast. Licensed technicians, 15+ years experience. Same-day service. 100% guarantee. Call 0450 955 420 for free quote!" />
        <meta name="keywords" content="pest control Brisbane, pest control Gold Coast, termite control Brisbane, termite control Gold Coast, termite inspection, pest removal, cockroach control, rodent control, surrounding suburbs" />
        <link rel="canonical" href="https://www.astrapest.com.au/" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-bg"></div>
        <div className="container hero-wrapper">
          <div className="hero-text">
            <span className="hero-label">Brisbane & Gold Coast's Trusted Pest Control Experts</span>
            <h1 className="hero-heading">
              Expert Pest <span className="highlight">&</span> Termite Solutions for Brisbane & Gold Coast
            </h1>
            <p className="hero-description">
              Serving Brisbane, Gold Coast and surrounding suburbs with professional pest and termite control since 2008. 
              Protecting your home and business with guaranteed results you can trust.
            </p>
            <div className="hero-actions">
              <a href="tel:0450955420" className="btn-primary">
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <Link to="/contact" className="btn-secondary">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="guarantee-banner">
        <div className="container">
          <h2>GUARANTEED • FAST • COURTEOUS • SAFE • ALWAYS LOW COST</h2>
          <p>Service to residential and commercial customers</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section-wow">
        <div className="container">
          <div className="video-section-header">
            <span className="section-label">Watch Us In Action</span>
            <h2 className="section-heading">See Our Professional Service</h2>
            <p className="section-description">Experience the quality and expertise that sets us apart</p>
          </div>
          
          <div className="video-showcase">
            <div className={`mobile-phone-frame ${isVideoPlaying ? 'landscape' : ''}`}>
              <div className="phone-notch"></div>
              <div className="phone-buttons">
                <div className="volume-up"></div>
                <div className="volume-down"></div>
                <div className="power-button"></div>
              </div>
              <div className="phone-screen">
                {!isVideoPlaying && (
                  <div className="play-overlay" onClick={handlePlayVideo}>
                    <div className="play-button-large">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                        <path d="M20 15L45 30L20 45V15Z" />
                      </svg>
                    </div>
                  </div>
                )}
                <iframe 
                  src={`https://www.youtube.com/embed/aIzVuBFdgVI?${isVideoPlaying ? 'autoplay=1&' : ''}si=4Aq1f-xlU5VhNrn-`}
                  title="Astra Pest Control - Professional Services" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="video-features-grid">
              <div className="video-feature-card">
                <div className="feature-icon-video">✔</div>
                <h4>100% Satisfaction Guaranteed</h4>
                <p>Quality results every time</p>
              </div>
              <div className="video-feature-card">
                <div className="feature-icon-video">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                </div>
                <h4>Professional Equipment</h4>
                <p>State-of-the-art technology</p>
              </div>
              <div className="video-feature-card">
                <div className="feature-icon-video"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg></div>
                <h4>Affordable Pricing</h4>
                <p>Best value for money</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="services-showcase">
        <div className="container">
          <div className="showcase-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-heading">Professional Pest & Termite Solutions for Brisbane & Gold Coast</h2>
            <p className="section-description">Comprehensive protection for your home and business with expert care</p>
          </div>
          
          <div className="services-grid-new">
            <Link to="/pest-control" className="service-card-large">
              <div className="service-image">
                <img src="/cockroach.jpg" alt="Pest Control Services" />
                <div className="service-overlay">
                  <span className="service-badge">Most Popular</span>
                </div>
              </div>
              <div className="service-content">
                <div className="service-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3>General Pest Control</h3>
                <p>Complete protection against cockroaches, ants, spiders, and common household pests</p>
                <ul className="service-features">
                  <li>Interior & exterior treatment</li>
                  <li>Safe for pets & children</li>
                  <li>6-month warranty</li>
                </ul>
                <span className="service-link">
                  Learn More
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </Link>

            <div className="service-cards-small">
              <Link to="/pest-control#termites" className="service-card-small">
                <div className="service-icon-small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h4>Termite Inspections</h4>
                <p>Thorough inspections with detailed reports</p>
                <span className="arrow">→</span>
              </Link>

              <Link to="/pest-control#termites" className="service-card-small">
                <div className="service-icon-small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4>Termite Treatment</h4>
                <p>Advanced barrier systems & baiting</p>
                <span className="arrow">→</span>
              </Link>

              <Link to="/pest-control#rodents" className="service-card-small">
                <div className="service-icon-small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4>Rodent Control</h4>
                <p>Effective removal & prevention strategies</p>
                <span className="arrow">→</span>
              </Link>

              <Link to="/pest-control#commercial" className="service-card-small">
                <div className="service-icon-small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <h4>Commercial Services</h4>
                <p>Tailored solutions for businesses</p>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>

          <div className="services-trust-bar">
            <div className="trust-item">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="trust-item">
              <strong>5000+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="trust-item">
              <strong>100%</strong>
              <span>Satisfaction Guarantee</span>
            </div>
            <div className="trust-item">
              <strong>24/7</strong>
              <span>Emergency Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Icons */}
      {/* Process Section */}
      <section className="process-modern">
        <div className="container">
          <div className="process-header">
            <span className="section-label">Our Approach</span>
            <h2 className="section-heading">How We Work</h2>
            <p className="section-description">A systematic approach ensuring exceptional results every time</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">01</div>
              <div className="timeline-content">
                <h3>Inspection & Assessment</h3>
                <p>Thorough evaluation of your specific needs and requirements</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">02</div>
              <div className="timeline-content">
                <h3>Customized Solution</h3>
                <p>Tailored approach using professional-grade equipment and products</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">03</div>
              <div className="timeline-content">
                <h3>Expert Execution</h3>
                <p>Skilled technicians deliver meticulous service with attention to detail</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">04</div>
              <div className="timeline-content">
                <h3>Quality Verification</h3>
                <p>Final inspection to ensure complete satisfaction with results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="image-banner-full">
        <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80" alt="Professional Cleaning Equipment" className="banner-bg-full" />
        <div className="banner-overlay-full"></div>
        <div className="banner-content-full">
          <h2>Professional Equipment & Expert Technicians</h2>
          <p>State-of-the-art truck-mounted machines and trained professionals delivering exceptional results</p>
          <a href="tel:0450955420" className="btn-banner-full">Call 07 3245 5126</a>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="cta-modern">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-text">
              <h2>Ready to Protect Your Property?</h2>
              <p>Contact Brisbane & Gold Coast's most trusted pest and termite control experts</p>
            </div>
            <div className="cta-actions">
              <a href="tel:0450955420" className="btn-cta-primary">
                <span>07 3245 5126</span>
              </a>
              <Link to="/contact" className="btn-cta-secondary">Get Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
