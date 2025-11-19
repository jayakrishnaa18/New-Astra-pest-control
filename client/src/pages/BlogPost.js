import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogContent } from '../blogContent';

function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return (
      <div className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2>Post not found</h2>
          <Link to="/blog" className="btn" style={{marginTop: '20px'}}>Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="hero">
        <div className="container">
          <span style={{color: 'var(--white)', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px'}}>{post.category}</span>
          <h1 style={{marginTop: '15px', fontSize: '48px'}}>{post.title}</h1>
          <p style={{fontSize: '18px', opacity: 0.9}}>{new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{maxWidth: '850px', margin: '0 auto'}}>
            <Link to="/blog" style={{color: 'var(--primary-red)', textDecoration: 'none', fontWeight: '700', marginBottom: '40px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '16px'}}>
              ← Back to All Articles
            </Link>
            <div style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--dark-gray)'}} dangerouslySetInnerHTML={{__html: post.content}} />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Our Services?</h2>
          <p style={{fontSize: '20px', marginBottom: '35px', position: 'relative', zIndex: 1}}>Contact us for professional cleaning and pest control</p>
          <a href="tel:0732455126" className="btn">Call 07 3245 5126</a>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
