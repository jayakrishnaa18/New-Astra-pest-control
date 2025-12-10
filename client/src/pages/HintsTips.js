import React, { useEffect, useState } from 'react';
import './HintsTips.css';
import { Link } from 'react-router-dom';

// Pest and termite tips for Brisbane and Gold Coast
const pestTips = [
  { title: 'Termite Prevention for Brisbane & Gold Coast Homes', category: 'Termites', excerpt: 'Protect your Brisbane or Gold Coast property with regular termite inspections and prevention strategies.', link: '/blog/2', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
  { title: 'Cockroach Control Solutions', category: 'Cockroaches', excerpt: 'Effective cockroach control strategies for Brisbane and Gold Coast homeowners and businesses.', link: '/blog/8', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&q=80' },
  { title: 'Ant Prevention Strategies', category: 'Ants', excerpt: 'Stop ant invasions before they start with professional ant control methods.', link: '/blog/16', image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400&q=80' },
  { title: 'Spider Control Methods', category: 'Spiders', excerpt: 'Safe and effective spider removal methods for Brisbane and Gold Coast homes.', link: '/blog/17', image: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=400&q=80' },
  { title: 'Rodent Prevention Tips', category: 'Rodents', excerpt: 'Keep rats and mice out of your Brisbane or Gold Coast home with professional strategies.', link: '/blog/18', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80' },
  { title: 'Bed Bug Detection Guide', category: 'Bed Bugs', excerpt: 'Complete bed bug elimination guide for Brisbane and Gold Coast homeowners.', link: '/blog/11', image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400&q=80' },
  { title: 'Flea Control for Pet Owners', category: 'Fleas', excerpt: 'Protect your pets and family with comprehensive flea control solutions.', link: '/blog/7', image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80' },
  { title: 'Silverfish Elimination', category: 'Silverfish', excerpt: 'Eliminate silverfish from your Brisbane or Gold Coast home with professional methods.', link: '/blog/9', image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&q=80' },
  { title: 'Wasp and Bee Safety', category: 'Wasps & Bees', excerpt: 'Safe wasp and bee removal services for Brisbane and Gold Coast properties.', link: '/blog/14', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { title: 'Seasonal Pest Prevention', category: 'Prevention', excerpt: 'Year-round pest protection guide for Brisbane and Gold Coast homeowners.', link: '/blog/6', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80' },
  { title: 'Commercial Pest Control', category: 'Commercial', excerpt: 'Professional pest control services for Brisbane and Gold Coast businesses.', link: '/blog/20', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { title: 'Eco-Friendly Pest Solutions', category: 'Eco-Friendly', excerpt: 'Safe, eco-friendly pest control methods for Brisbane and Gold Coast families.', link: '/blog/23', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80' }
];

const HintsTips = () => {
  // State to store random blogs
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    // Select 8 random pest tips when component loads
    const shuffled = [...pestTips].sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 8));

    const updateTimeline = () => {
      const timeline = document.querySelector('.timeline-wrapper::after');
      const timelineWrapper = document.querySelector('.timeline-wrapper');
      if (timelineWrapper) {
        const rect = timelineWrapper.getBoundingClientRect();
        const scrolled = window.scrollY;
        const timelineTop = rect.top + scrolled;
        const progress = Math.min(Math.max((scrolled - timelineTop + 200) / rect.height, 0), 1);
        document.documentElement.style.setProperty('--timeline-progress', progress);
      }
    };

    window.addEventListener('scroll', updateTimeline);
    updateTimeline();
    return () => window.removeEventListener('scroll', updateTimeline);
  }, []);

  return (
    <div className="hints-tips">
      <section className="page-hero">
        <h1>Hints & Tips</h1>
        <p>Professional tips and expert advice to protect your Brisbane and Gold Coast home from pests and termites</p>
      </section>

      <div className="container tips-content">
        <div className="timeline-wrapper">
          <div className="tip-card">
            <div className="tip-number">01</div>
            <div className="tip-content">
              <h2>Termite Prevention is Key</h2>
              <p>Termites cause millions in damage annually in Australia. Don't wait until you see signs - prevention is always better and cheaper than treatment.</p>
              <div className="stain-types">
                <span className="stain-tag">Annual Inspections</span>
                <span className="stain-tag">Moisture Control</span>
                <span className="stain-tag">Wood Contact</span>
                <span className="stain-tag">Barrier Treatments</span>
              </div>
              <p className="tip-highlight">Call Astra Pest Control for professional termite inspections and prevention advice.</p>
            </div>
            <div></div>
          </div>

          <div className="tip-card">
            <div className="tip-number">02</div>
            <div></div>
            <div className="tip-content">
              <h2>Seal Entry Points</h2>
              <p>Most pests enter through small cracks and gaps. Regularly inspect and seal entry points around your Brisbane or Gold Coast home.</p>
              <p>Focus on areas around pipes, windows, doors, and where utilities enter your home. Use appropriate sealants for different materials.</p>
              <div className="tip-callout">
                <strong>Pro Tip:</strong> A gap as small as a credit card can allow cockroaches and other pests to enter your home.
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-number">03</div>
            <div className="tip-content">
              <h2>Choose Professional Pest Control</h2>
              <p>When selecting pest control services, look for licensed technicians with local Brisbane and Gold Coast experience and proven track records.</p>
              
              <div className="experience-badge">
                <div className="badge-icon">🛡️</div>
                <div className="badge-content">
                  <div className="badge-number">Licensed</div>
                  <div className="badge-text">& Insured</div>
                </div>
              </div>

              <p>Astra Pest Control uses professional-grade treatments and provides warranties on all pest control services.</p>
              
              <div className="checklist">
                <h4>Ask your cleaner:</h4>
                <ul>
                  <li><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{marginRight: '8px', color: '#10b981'}}><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>How long they have been in business</li>
                  <li><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{marginRight: '8px', color: '#10b981'}}><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Look for before and after pictures</li>
                  <li><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{marginRight: '8px', color: '#10b981'}}><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Do an ABN search</li>
                  <li><svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{marginRight: '8px', color: '#10b981'}}><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>Ask if they have insurance</li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>

          <div className="tip-card">
            <div className="tip-number">04</div>
            <div></div>
            <div className="tip-content">
              <h2>Maintain Your Garden</h2>
              <p>Keep vegetation trimmed away from your house. Overgrown plants provide highways for pests to reach your home.</p>
              <p>Remove standing water, clean up fallen fruit, and store firewood away from the house to reduce pest attractants.</p>
              
              <div className="tips-list">
                <div className="tip-item">
                  <div className="tip-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Use Plastic Bags</h4>
                    <p>Put rubbish into plastic bags before the wheelie bin</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Keep Bins Away</h4>
                    <p>Keep the wheelie bin away from the house</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Clean Regularly</h4>
                    <p>Give the wheelie bin a good clean once a year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-number">05</div>
            <div className="tip-content">
              <h2>Latest Cleaning Equipment?</h2>
              <p>When Astra comes to your home, our professional technicians use powerful truck mounted or high powered portable hot water extraction machines.</p>
              
              <div className="equipment-features">
                <div className="equipment-item">
                  <div className="equipment-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm1.5-9H17V12h4.46L19.5 9.5zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4h3zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6H3z"/>
                    </svg>
                  </div>
                  <h4>Truck Mounted</h4>
                  <p>No electricity or hot water needed</p>
                </div>
                <div className="equipment-item">
                  <div className="equipment-icon">⚡</div>
                  <h4>Portable Machines</h4>
                  <p>For high rise units</p>
                </div>
              </div>

              <p>We get deep down into the base of the carpet fibres to remove all bacteria and dirt.</p>
              
              <p className="tip-highlight">
                <strong>CALL THE REST THEN CALL THE BEST.</strong> See our Blogs on the <Link to="/blog" style={{color: '#dc2626', textDecoration: 'underline'}}>blog page</Link>.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="related-blogs-section">
          <h3>Related Articles</h3>
          
          <div className="blogs-grid">
            {randomBlogs.map((blog, index) => (
              <Link key={index} to={blog.link} className="blog-card-mini">
                <div className="blog-info">
                  <span className="blog-category">{blog.category}</span>
                  <h4>{blog.title}</h4>
                  <p>{blog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-box-bottom">
        <h3>Ready for Professional Cleaning?</h3>
        <p>Get a free quote today and experience the difference!</p>
        <div className="cta-buttons-tips">
          <Link to="/contact" className="btn-cta-primary">Get Free Quote</Link>
          <a href="tel:0450955420" className="btn-cta-secondary">Call 0450 955 420</a>
        </div>
      </div>
    </div>
  );
};

export default HintsTips;
