import React from 'react';

function Services() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Professional cleaning and pest control solutions across Brisbane</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <h3>Carpet Steam Cleaning</h3>
              <p>Our professional carpet steam cleaning service uses hot water extraction to deep clean and sanitize your carpets. We remove dirt, stains, allergens, and bacteria, leaving your carpets fresh and clean.</p>
              <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
                <li>Deep steam cleaning</li>
                <li>Stain removal</li>
                <li>Odor elimination</li>
                <li>Fast drying time</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Pest Control Services</h3>
              <p>Comprehensive pest management for residential and commercial properties. We handle all types of pests including cockroaches, ants, spiders, rodents, and termites.</p>
              <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
                <li>General pest control</li>
                <li>Termite inspections</li>
                <li>Rodent control</li>
                <li>Safe treatments</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Upholstery Cleaning</h3>
              <p>Expert cleaning for all types of upholstered furniture including sofas, chairs, ottomans, and dining chairs. We restore the look and feel of your furniture.</p>
              <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
                <li>Fabric protection</li>
                <li>Stain treatment</li>
                <li>Odor removal</li>
                <li>Color restoration</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Mattress Cleaning</h3>
              <p>Professional mattress cleaning and sanitization service. We remove dust mites, allergens, and bacteria for a healthier sleeping environment.</p>
              <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
                <li>Deep sanitization</li>
                <li>Dust mite removal</li>
                <li>Allergen elimination</li>
                <li>Stain treatment</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Rug Cleaning</h3>
              <p>Specialized cleaning for all types of rugs including Persian, Oriental, wool, and synthetic rugs. We handle delicate and valuable rugs with care.</p>
              <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
                <li>Hand cleaning available</li>
                <li>Color safe methods</li>
                <li>Fringe cleaning</li>
                <li>Pickup & delivery</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Bond Cleaning</h3>
              <p>Complete end-of-lease cleaning service to help you get your bond back. We clean every corner of your property to meet real estate standards.</p>
              <ul style={{marginTop: '15px', paddingLeft: '20px'}}>
                <li>Full property clean</li>
                <li>Carpet steam cleaning</li>
                <li>Window cleaning</li>
                <li>Bond back guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need a Quote?</h2>
          <p style={{fontSize: '18px', marginBottom: '30px'}}>Contact us for a free, no-obligation quote</p>
          <a href="tel:0450955420" className="btn">Call 07 3245 5126</a>
        </div>
      </section>
    </div>
  );
}

export default Services;
