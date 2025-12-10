import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogContent } from '../blogContent';
import './BlogPost.css';

const relatedPosts = [
  { id: 2, title: 'Guide To Carpet Cleaning Cost', category: 'Cleaning', date: '2022-05-30', link: '/blog/2' },
  { id: 3, title: 'Guide to Carpet Cleaning – All Questions Answered', category: 'Cleaning', date: '2022-04-26', link: '/blog/3' },
  { id: 4, title: '10 Health Benefits Of Carpet Cleaning', category: 'Cleaning', date: '2022-04-19', link: '/blog/4' },
  { id: 5, title: '4 Easy Steps To Get Mud Stains Out Of Carpet', category: 'Cleaning', date: '2017-08-29', link: '/blog/5' }
];

function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return (
      <div className="post-not-found">
        <div className="container">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-btn-error">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="post-header">
        <div className="container-narrow">
          <Link to="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Blog
          </Link>
          <div className="post-meta-header">
            <span className="post-category">{post.category}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
        </div>
      </div>

      <div className="post-content-wrapper">
        <div className="post-layout">
          <article className="post-content">
            <div className="content-body" dangerouslySetInnerHTML={{__html: post.content}} />
            
            <div className="post-footer">
              <div className="share-section">
                <span className="share-label">Share this article</span>
                <div className="share-buttons">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-btn" title="Share on Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="share-btn" title="Share on Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="share-btn" title="Share on LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={`mailto:?subject=${post.title}&body=Check out this article: ${window.location.href}`} className="share-btn" title="Share via Email">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <aside className="post-sidebar">
            <div className="sidebar-card cta-card">
              <h3>Need Our Services?</h3>
              <p>Get professional cleaning and pest control services today</p>
              <a href="tel:0450955420" className="cta-btn">Call 0450 955 420</a>
              <Link to="/contact" className="cta-btn cta-btn-secondary">Get Free Quote</Link>
            </div>

            <div className="sidebar-card">
              <h3>Related Articles</h3>
              <ul className="related-posts">
                {relatedPosts.map(related => (
                  <li key={related.id} className="related-post-item">
                    <Link to={related.link} className="related-post-link">
                      <div className="related-post-category">{related.category}</div>
                      <h4 className="related-post-title">{related.title}</h4>
                      <div className="related-post-meta">
                        {new Date(related.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Topics</h3>
              <ul className="tags-list">
                <Link to="/blog?category=Cleaning"><li className="tag-item">Carpet Cleaning</li></Link>
                <Link to="/blog?category=Pest Control"><li className="tag-item">Pest Control</li></Link>
                <Link to="/blog?category=Cleaning"><li className="tag-item">Stain Removal</li></Link>
                <Link to="/blog?category=Services"><li className="tag-item">Home Care</li></Link>
                <Link to="/blog"><li className="tag-item">Tips & Guides</li></Link>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
