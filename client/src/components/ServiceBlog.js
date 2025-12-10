import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBlog.css';

const relatedServices = [
  { title: 'Professional Carpet Cleaning Services', category: 'Services', link: '/cleaning/carpet-cleaning' },
  { title: 'Tile and Grout Cleaning', category: 'Services', link: '/cleaning/tile-grout' },
  { title: 'Upholstery Cleaning', category: 'Services', link: '/cleaning/upholstery' },
  { title: 'Mattress Deep Cleaning', category: 'Services', link: '/cleaning/mattress' }
];

function ServiceBlog({ title, subtitle, heroImage, content, features, process, cta }) {
  return (
    <div className="service-blog-pro">
      <div className="service-header-pro">
        <div className="container-narrow-pro">
          <Link to="/blog" className="back-link-pro">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Blog
          </Link>
          <h1 className="service-title-pro">{title}</h1>
          {subtitle && <p className="service-subtitle-pro">{subtitle}</p>}
          <div className="service-cta-buttons-pro">
            <a href="tel:0450955420" className="btn-call-pro">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call 0450 955 420
            </a>
            <Link to="/contact" className="btn-quote-pro">Get Free Quote</Link>
          </div>
        </div>
      </div>

      <div className="service-content-wrapper-pro">
        <div className="service-layout-pro">
          <article className="service-content-pro">
            <div className="content-body-pro">
              {content.map((section, index) => (
                <div key={index} className="content-section-pro">
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {section.list && (
                    <ul className="content-list-pro">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {process && process.length > 0 && (
                <div className="process-section-pro">
                  <h2>Our Process</h2>
                  <div className="process-steps-pro">
                    {process.map((step, index) => (
                      <div key={index} className="process-step-pro">
                        <div className="step-number-pro">{index + 1}</div>
                        <div className="step-content-pro">
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {features && features.length > 0 && (
                <div className="features-section-pro">
                  <h2>Key Features</h2>
                  <ul className="features-list-pro">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="service-footer-pro">
              <div className="share-section-pro">
                <span className="share-label-pro">Share this service</span>
                <div className="share-buttons-pro">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-btn-pro">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${title}`} target="_blank" rel="noopener noreferrer" className="share-btn-pro">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-btn-pro">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <aside className="service-sidebar-pro">
            <div className="sidebar-card-pro author-info-pro">
              <img src="/logo.png" alt="Astra Pest Control" className="author-logo-pro" />
              <div className="author-name-pro">Astra Pest Control</div>
              <p className="author-bio-pro">Expert cleaning and pest control professionals serving Brisbane and surrounding areas.</p>
            </div>

            <div className="sidebar-card-pro cta-card-pro">
              <h3>Need Our Services?</h3>
              <p>Get professional cleaning and pest control services today</p>
              <a href="tel:0450955420" className="cta-btn-sidebar">Call 0450 955 420</a>
              <Link to="/contact" className="cta-btn-sidebar cta-btn-secondary-sidebar">Get Free Quote</Link>
            </div>

            <div className="sidebar-card-pro">
              <h3>Related Services</h3>
              <ul className="related-posts-pro">
                {relatedServices.map((service, index) => (
                  <li key={index} className="related-post-item-pro">
                    <Link to={service.link} className="related-post-link-pro">
                      <div className="related-post-category-pro">{service.category}</div>
                      <h4 className="related-post-title-pro">{service.title}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card-pro">
              <h3>Topics</h3>
              <ul className="tags-list-pro">
                <Link to="/blog?category=Cleaning"><li className="tag-item-pro">Carpet Cleaning</li></Link>
                <Link to="/blog?category=Pest Control"><li className="tag-item-pro">Pest Control</li></Link>
                <Link to="/blog?category=Cleaning"><li className="tag-item-pro">Stain Removal</li></Link>
                <Link to="/blog?category=Services"><li className="tag-item-pro">Home Care</li></Link>
                <Link to="/blog"><li className="tag-item-pro">Tips & Guides</li></Link>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="service-cta-bottom-pro">
        <div className="container">
          <div className="cta-content-bottom-pro">
            <h2>{cta?.title || 'Need Professional Help?'}</h2>
            <p>{cta?.description || 'Get expert cleaning and pest control services in Brisbane'}</p>
            <div className="cta-actions-bottom-pro">
              <a href="tel:0450955420" className="cta-btn-primary-bottom-pro">Call 0450 955 420</a>
              <Link to="/contact" className="cta-btn-secondary-bottom-pro">Get Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceBlog;
