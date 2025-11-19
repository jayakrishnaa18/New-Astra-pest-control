import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../components/Reviews';
import './Home.css';

function Home() {
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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-bg"></div>
        <div className="container hero-wrapper">
          <div className="hero-text">
            <span className="hero-label">Brisbane's Premier Choice</span>
            <h1 className="hero-heading">
              Professional Carpet Cleaning <span className="highlight">&</span> Pest Control
            </h1>
            <p className="hero-description">
              Transforming homes and businesses across Brisbane with 15+ years of excellence. 
              We deliver unmatched quality in carpet cleaning and pest management services.
            </p>
            <div className="hero-actions">
              <a href="tel:0732455126" className="btn-primary">
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
      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">
            <div className="video-wrapper-left">
              <iframe 
                src="https://www.youtube.com/embed/aIzVuBFdgVI?si=4Aq1f-xlU5VhNrn-" 
                title="Astra Pest Control - Professional Services" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-text-right">
              <h3>Quality Carpet Cleaning Services</h3>
              <p>With our quality carpet cleaning services, we have built a strong reputation in the carpet cleaning domain. We make every possible effort to provide our customers the best cleaning results.</p>
              <ul className="video-features">
                <li>✓ 100% Satisfaction Guaranteed</li>
                <li>✓ Professional Equipment & Techniques</li>
                <li>✓ Affordable Pricing Options</li>
              </ul>
              <Link to="/contact" className="btn-video-cta">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase with Images */}
      <section className="services-showcase">
        <div className="container">
          <div className="showcase-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-heading">Professional Solutions for Your Home</h2>
          </div>
          
          <div className="showcase-grid">
            <Link to="/cleaning" className="showcase-card-modern">
              <div className="card-image-modern">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" alt="Carpet Cleaning" />
                <div className="image-overlay-modern"></div>
              </div>
              <div className="card-content-modern">
                <div className="card-icon-modern">🧹</div>
                <h3>Cleaning Services</h3>
                <p>Professional carpet, upholstery, tile & grout cleaning with guaranteed results</p>
                <span className="card-link-modern">
                  Explore Services
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link to="/pest-control" className="showcase-card-modern">
              <div className="card-image-modern">
                <img src="/cockroach.jpg" alt="Pest Control" />
                <div className="image-overlay-modern"></div>
              </div>
              <div className="card-content-modern">
                <div className="card-icon-modern">🛡️</div>
                <h3>Pest Control</h3>
                <p>Complete pest management and prevention solutions for a safe environment</p>
                <span className="card-link-modern">
                  Explore Services
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features with Icons */}
      <section className="features-modern">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 20L18 26L28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>15+ Years Experience</h3>
              <p>Trusted expertise serving Brisbane since 2008</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L25 15L35 17L27 25L29 35L20 30L11 35L13 25L5 17L15 15L20 5Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>100% Guaranteed</h3>
              <p>Quality assurance on every service we provide</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 12V20L26 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Same Day Service</h3>
              <p>Fast response for urgent cleaning and pest needs</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 8C13 8 8 13 8 20C8 27 13 32 20 32C27 32 32 27 32 20C32 13 27 8 20 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 14V20L24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Eco-Friendly</h3>
              <p>Safe products for family, pets, and environment</p>
            </div>
          </div>
        </div>
      </section>

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
          <a href="tel:0732455126" className="btn-banner-full">Call 07 3245 5126</a>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="cta-modern">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-text">
              <h2>Ready to Transform Your Space?</h2>
              <p>Get in touch with Brisbane's most trusted cleaning and pest control experts</p>
            </div>
            <div className="cta-actions">
              <a href="tel:0732455126" className="btn-cta-primary">
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
