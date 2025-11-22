import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Rubbish Removal Versus Skip Bin Hire, Which is Better?',
    excerpt: 'When you\'re moving out, cleaning and removing waste come hand in hand. Discover the best option for your needs.',
    date: '2022-09-02',
    category: 'General',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    readTime: '5 min read',
    link: '/blog/1'
  },
  {
    id: 2,
    title: 'Guide To Carpet Cleaning Cost',
    excerpt: 'How Much Does It Cost To Get Your Carpets Cleaned? Get the complete breakdown of professional carpet cleaning costs.',
    date: '2022-05-30',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/2'
  },
  {
    id: 3,
    title: 'Guide to Carpet Cleaning – All Your Questions Answered',
    excerpt: 'Everything homeowners need to know about maintaining and cleaning their carpets professionally.',
    date: '2022-04-26',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/3'
  },
  {
    id: 4,
    title: '10 Health Benefits Of Carpet Cleaning',
    excerpt: 'The Secret To A Healthier Home. Discover how professional carpet cleaning improves your health.',
    date: '2022-04-19',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/4'
  },
  {
    id: 5,
    title: '4 Easy Steps To Get Mud Stains Out Of Carpet',
    excerpt: 'Every parent knows the struggle. Learn professional techniques to remove stubborn mud stains.',
    date: '2017-08-29',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80',
    readTime: '4 min read',
    link: '/blog/5'
  },
  {
    id: 6,
    title: '4 Ways To Winter Proof Your Home From Pests',
    excerpt: 'Winter is pest season. Protect your home with these professional prevention strategies.',
    date: '2017-07-01',
    category: 'Pest Control',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    readTime: '5 min read',
    link: '/blog/6'
  },
  {
    id: 7,
    title: 'Complete Guide to Flea Control',
    excerpt: 'Everything you need to know about identifying, treating, and preventing flea infestations in your home.',
    date: '2024-11-21',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/7'
  },
  {
    id: 8,
    title: 'Cockroach Control: Protect Your Family',
    excerpt: 'Learn how to identify, prevent, and eliminate cockroach infestations with professional pest control methods.',
    date: '2024-11-20',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/8'
  },
  {
    id: 9,
    title: 'Silverfish Identification and Control',
    excerpt: 'Discover how to identify silverfish and protect your books, photos, and clothing from these destructive pests.',
    date: '2024-11-19',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/9'
  },
  {
    id: 10,
    title: 'Spider Control and Prevention Guide',
    excerpt: 'Professional tips for managing spider populations around your home and keeping your family safe.',
    date: '2024-11-18',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/10'
  },
  {
    id: 11,
    title: 'Bed Bug Extermination Methods',
    excerpt: 'Don\'t let the bed bugs bite! Professional methods to eliminate bed bugs from your home completely.',
    date: '2024-11-17',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/11'
  },
  {
    id: 12,
    title: 'Rodent Control: Rats and Mice',
    excerpt: 'Effective strategies for preventing and eliminating rat and mouse infestations in residential and commercial properties.',
    date: '2024-11-16',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/12'
  },
  {
    id: 13,
    title: 'Silverfish Identification and Control',
    excerpt: 'Discover how to identify silverfish and protect your books, photos, and clothing from these destructive pests.',
    date: '2024-11-19',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/13'
  },
  {
    id: 14,
    title: 'Spider Control and Prevention Guide',
    excerpt: 'Professional tips for managing spider populations around your home and keeping your family safe.',
    date: '2024-11-18',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/14'
  },
  {
    id: 15,
    title: 'Bed Bug Extermination Methods',
    excerpt: 'Don\'t let the bed bugs bite! Professional methods to eliminate bed bugs from your home completely.',
    date: '2024-11-17',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/15'
  },
  {
    id: 16,
    title: 'Rodent Control: Rats and Mice',
    excerpt: 'Effective strategies for preventing and eliminating rat and mouse infestations in residential and commercial properties.',
    date: '2024-11-16',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/16'
  },
  {
    id: 17,
    title: 'Termite Inspection and Treatment',
    excerpt: 'Protect your property from termite damage with professional inspection and treatment methods.',
    date: '2024-11-15',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    readTime: '12 min read',
    link: '/blog/17'
  },
  {
    id: 18,
    title: 'Lice Treatment and Prevention',
    excerpt: 'Comprehensive guide to identifying, treating, and preventing lice infestations in your home.',
    date: '2024-11-13',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/18'
  },
  {
    id: 19,
    title: 'Carpet Beetle Control Guide',
    excerpt: 'Learn how to identify and eliminate carpet beetles before they damage your carpets, clothes, and fabrics.',
    date: '2024-11-14',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/19'
  },
  {
    id: 'carpet-cleaning',
    title: 'Professional Carpet Cleaning Services',
    excerpt: 'Deep steam cleaning for all carpet types. Professional hot water extraction and low moisture cleaning methods.',
    date: '2024-01-15',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    readTime: '8 min read',
    link: '/cleaning/carpet-cleaning'
  },
  {
    id: 'tile-grout',
    title: 'Tile and Grout Cleaning',
    excerpt: 'Restore shine to tiles and grout with our professional high-pressure cleaning systems.',
    date: '2024-01-14',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/tile-grout'
  },
  {
    id: 'upholstery',
    title: 'Upholstery Cleaning',
    excerpt: 'Professional furniture cleaning for all fabric types. Safe, effective, and fast-drying methods.',
    date: '2024-01-13',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/upholstery'
  },
  {
    id: 'leather',
    title: 'Leather Seat Cleaning',
    excerpt: 'Specialized leather care and conditioning to restore and protect your leather furniture.',
    date: '2024-01-12',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/leather'
  },
  {
    id: 'mould',
    title: 'Mould Removal Services',
    excerpt: 'Safe mould treatment and prevention. Professional removal with eco-friendly products.',
    date: '2024-01-11',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/mould'
  },
  {
    id: 'rug',
    title: 'Professional Rug Cleaning',
    excerpt: 'Gentle cleaning for delicate rugs. Expert care for Persian, Oriental, and modern rugs.',
    date: '2024-01-10',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/rug'
  },
  {
    id: 'vehicles',
    title: 'Vehicle Interior Cleaning',
    excerpt: 'Mobile vehicle cleaning service. Professional interior detailing for cars, caravans and boats.',
    date: '2024-01-09',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/vehicles'
  },
  {
    id: 'flood',
    title: 'Emergency Flood Water Extraction',
    excerpt: 'Emergency water removal service. Fast response 24/7 for flood and water damage.',
    date: '2024-01-08',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/flood'
  },
  {
    id: 'commercial',
    title: 'Commercial Carpet Cleaning',
    excerpt: 'Business cleaning solutions. After-hours service available for offices and commercial spaces.',
    date: '2024-01-07',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/commercial'
  },
  {
    id: 'bond',
    title: 'End of Lease Bond Cleaning',
    excerpt: 'End of lease cleaning guarantee. Get your bond back with our comprehensive cleaning service.',
    date: '2024-01-06',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&q=80',
    readTime: '8 min read',
    link: '/cleaning/bond'
  },
  {
    id: 'mattress',
    title: 'Mattress Deep Cleaning',
    excerpt: 'Hygienic mattress deep cleaning. Remove dust mites, allergens, and stains for better sleep.',
    date: '2024-01-05',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/mattress'
  },
  {
    id: 'protection',
    title: 'Carpet & Upholstery Protection',
    excerpt: 'Stain protection treatment. Keep your carpets and upholstery cleaner for longer.',
    date: '2024-01-04',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/protection'
  },
  {
    id: 'encapsulation',
    title: 'Low Moisture Encapsulation Cleaning',
    excerpt: 'Low moisture dry cleaning method. Walk-on dry results with eco-friendly cleaning.',
    date: '2024-01-03',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/encapsulation'
  },
  {
    id: 'repairs',
    title: 'Carpet & Upholstery Repairs',
    excerpt: 'Professional carpet repair service. Save money with expert repairs instead of replacement.',
    date: '2024-01-02',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/repairs'
  },
  {
    id: 'duo-system',
    title: 'Duo System for High Rise Apartments',
    excerpt: 'High rise apartment specialist. Two-step cleaning system for fast-drying results.',
    date: '2024-01-01',
    category: 'Services',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/duo-system'
  }
];

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const pageParam = parseInt(searchParams.get('page')) || 1;
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [currentPage, setCurrentPage] = useState(pageParam);
  
  const POSTS_PER_PAGE = 9;
  
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when category changes
  }, [selectedCategory]);
  
  const categories = ['All', 'Cleaning', 'Pest Control', 'Services', 'General'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const featuredPost = currentPage === 1 ? currentPosts[0] : null;
  const regularPosts = currentPage === 1 ? currentPosts.slice(1) : currentPosts;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page-pro">
      <section className="blog-hero-pro">
        <div className="container">
          <span className="hero-label">Our Blog</span>
          <h1>Expert Insights & Tips</h1>
          <p>Professional advice on cleaning and pest control from Brisbane's trusted experts</p>
        </div>
      </section>

      <section className="blog-main-pro">
        <div className="container">
          <div className="blog-filters-pro">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn-pro ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {featuredPost && (
            <Link to={featuredPost.link} className="featured-post-pro">
              <div className="featured-image-pro">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="featured-badge">Featured</span>
              </div>
              <div className="featured-content-pro">
                <div className="featured-meta-pro">
                  <span className="category-tag-pro">{featuredPost.category}</span>
                  <span className="meta-dot">•</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}</span>
                  <span className="meta-dot">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <span className="read-link-pro">Read Full Article →</span>
              </div>
            </Link>
          )}

          <div className="blog-grid-pro">
            {regularPosts.map((post, index) => (
              <Link 
                key={post.id} 
                to={post.link}
                className="blog-card-pro"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="card-image-pro">
                  <img src={post.image} alt={post.title} />
                  <span className="category-badge-pro">{post.category}</span>
                </div>
                <div className="card-content-pro">
                  <div className="card-meta-pro">
                    <span>{new Date(post.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}</span>
                    <span className="meta-dot">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-article-btn">Read Article</span>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                className="page-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="blog-cta-pro">
        <div className="container">
          <h2>Need Professional Help?</h2>
          <p>Get expert cleaning and pest control services today</p>
          <div className="cta-buttons-pro">
            <a href="tel:0732455126" className="btn-primary-pro">Call (07) 3245 5126</a>
            <Link to="/contact" className="btn-secondary-pro">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
