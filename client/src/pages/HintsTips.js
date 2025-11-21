import React, { useEffect, useState } from 'react';
import './HintsTips.css';
import { Link } from 'react-router-dom';

// Import blog posts from Blog.js
const allBlogPosts = [
  { title: 'Professional Carpet Cleaning Services', category: 'Services', link: '/cleaning/carpet-cleaning', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80' },
  { title: 'Tile and Grout Cleaning', category: 'Services', link: '/cleaning/tile-grout', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80' },
  { title: 'Upholstery Cleaning', category: 'Services', link: '/cleaning/upholstery', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
  { title: 'Leather Seat Cleaning', category: 'Services', link: '/cleaning/leather', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80' },
  { title: 'Mould Removal Services', category: 'Services', link: '/cleaning/mould', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80' },
  { title: 'Professional Rug Cleaning', category: 'Services', link: '/cleaning/rug', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80' },
  { title: 'Mattress Deep Cleaning', category: 'Services', link: '/cleaning/mattress', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80' },
  { title: 'Carpet & Upholstery Protection', category: 'Services', link: '/cleaning/protection', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
  { title: 'Low Moisture Encapsulation Cleaning', category: 'Services', link: '/cleaning/encapsulation', image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=400&q=80' },
  { title: 'Carpet & Upholstery Repairs', category: 'Services', link: '/cleaning/repairs', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80' },
  { title: 'Duo System for High Rise Apartments', category: 'Services', link: '/cleaning/duo-system', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80' },
  { title: 'Guide To Carpet Cleaning Cost', category: 'Cleaning', link: '/blog/2', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=80' },
  { title: '10 Health Benefits Of Carpet Cleaning', category: 'Cleaning', link: '/blog/4', image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&q=80' },
  { title: '4 Easy Steps To Get Mud Stains Out', category: 'Cleaning', link: '/blog/5', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80' }
];

const HintsTips = () => {
  // State to store random blogs
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    // Select 8 random blogs when component loads
    const shuffled = [...allBlogPosts].sort(() => 0.5 - Math.random());
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
        <p>Handy hints & tips for carpet and upholstery cleaning</p>
      </section>

      <div className="container tips-content">
        <div className="timeline-wrapper">
          <div className="tip-card">
            <div className="tip-number">01</div>
            <div className="tip-content">
              <h2>Stain in Carpet or Seats?</h2>
              <p>If you have a stain in your valuable carpets or seats, don't try to DIY if the stain has been there for some time, as you may set the stain and make it harder or impossible to remove.</p>
              <div className="stain-types">
                <span className="stain-tag">Rust</span>
                <span className="stain-tag">Ink</span>
                <span className="stain-tag">Pen</span>
                <span className="stain-tag">Water Marks</span>
                <span className="stain-tag">Grease</span>
                <span className="stain-tag">Makeup</span>
              </div>
              <p className="tip-highlight">Call Astra Cleaning & Pest Control for professional stain removal advice anytime.</p>
            </div>
            <div></div>
          </div>

          <div className="tip-card">
            <div className="tip-number">02</div>
            <div></div>
            <div className="tip-content">
              <h2>Vacuum Your Carpets?</h2>
              <p>Do you know that you should vacuum your carpets regularly, at least twice every week? Most people don't vacuum enough!</p>
              <p>Dirt gets easily embedded into carpet fibres, and using a vacuum that has a rotating brush or "power head" on the highest floor setting is the best way to go.</p>
              <div className="tip-callout">
                <strong>Pro Tip:</strong> Vacuuming your carpet frequently is an absolute must if you want it to have a long life.
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-number">03</div>
            <div className="tip-content">
              <h2>Choose a Quality Carpet Cleaner?</h2>
              <p>To choose a quality carpet cleaner, you first have to see what sort of equipment they use. Most carpet cleaners who use switch and bait tactics to push up the price are inexperienced.</p>
              
              <div className="experience-badge">
                <div className="badge-icon">⭐</div>
                <div className="badge-content">
                  <div className="badge-number">15+</div>
                  <div className="badge-text">Years Experience</div>
                </div>
              </div>

              <p>Astra has invested in powerful truck mounted machines and high powered portable hot water extraction machines. Old machines leave sticky residue that attracts dust.</p>
              
              <div className="checklist">
                <h4>Ask your cleaner:</h4>
                <ul>
                  <li>✓ How long they have been in business</li>
                  <li>✓ Look for before and after pictures</li>
                  <li>✓ Do an ABN search</li>
                  <li>✓ Ask if they have insurance</li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>

          <div className="tip-card">
            <div className="tip-number">04</div>
            <div></div>
            <div className="tip-content">
              <h2>Control Ants at Your Place</h2>
              <p>Ants will use your wheelie bins as a great source of food. All the rubbish we throw out each day ants love.</p>
              
              <div className="tips-list">
                <div className="tip-item">
                  <div className="tip-icon">🗑️</div>
                  <div>
                    <h4>Use Plastic Bags</h4>
                    <p>Put rubbish into plastic bags before the wheelie bin</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">🏠</div>
                  <div>
                    <h4>Keep Bins Away</h4>
                    <p>Keep the wheelie bin away from the house</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">🧼</div>
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
                  <div className="equipment-icon">🚚</div>
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
          <p>More cleaning tips</p>
          
          <div className="blogs-grid">
            {randomBlogs.map((blog, index) => (
              <Link key={index} to={blog.link} className="blog-card-mini">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-info">
                  <span className="blog-category">{blog.category}</span>
                  <h4>{blog.title}</h4>
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
          <a href="tel:0732455126" className="btn-cta-secondary">Call (07) 3245 5126</a>
        </div>
      </div>
    </div>
  );
};

export default HintsTips;
