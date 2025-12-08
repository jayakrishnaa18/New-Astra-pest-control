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
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/14'
  },
  {
    id: 15,
    title: 'Termite Inspection Guide for Richlands Homeowners',
    excerpt: 'Essential guide to termite inspections, signs of infestation, and protection for your Richlands property.',
    date: '2024-12-08',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/15'
  },
  {
    id: 16,
    title: 'Ant Control Solutions for Richlands Homes',
    excerpt: 'Effective ant control methods, species identification, and prevention tips for Richlands residents.',
    date: '2024-12-08',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/16'
  },
  {
    id: 17,
    title: 'Spider Control: Keep Your Richlands Home Safe',
    excerpt: 'Identify dangerous spiders, professional treatment methods, and prevention strategies for Richlands homes.',
    date: '2024-12-07',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/17'
  },
  {
    id: 18,
    title: 'Rodent Control: Rats and Mice in Richlands',
    excerpt: 'Comprehensive rodent control guide covering health risks, prevention, and professional treatment options.',
    date: '2024-12-06',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600566752229-250ed79470e6?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/19'
  },
  {
    id: 'carpet-cleaning',
    title: 'Professional Carpet Cleaning Services',
    excerpt: 'Deep steam cleaning for all carpet types. Professional hot water extraction and low moisture cleaning methods.',
    date: '2024-01-15',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135a?w=800&q=80',
    readTime: '8 min read',
    link: '/cleaning/carpet-cleaning'
  },
  {
    id: 'tile-grout',
    title: 'Tile and Grout Cleaning',
    excerpt: 'Restore shine to tiles and grout with our professional high-pressure cleaning systems.',
    date: '2024-01-14',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600607688066-890987acc316?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/tile-grout'
  },
  {
    id: 'upholstery',
    title: 'Upholstery Cleaning',
    excerpt: 'Professional furniture cleaning for all fabric types. Safe, effective, and fast-drying methods.',
    date: '2024-01-13',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/upholstery'
  },
  {
    id: 'leather',
    title: 'Leather Seat Cleaning',
    excerpt: 'Specialized leather care and conditioning to restore and protect your leather furniture.',
    date: '2024-01-12',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/leather'
  },
  {
    id: 'mould',
    title: 'Mould Removal Services',
    excerpt: 'Safe mould treatment and prevention. Professional removal with eco-friendly products.',
    date: '2024-01-11',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/mould'
  },
  {
    id: 'rug',
    title: 'Professional Rug Cleaning',
    excerpt: 'Gentle cleaning for delicate rugs. Expert care for Persian, Oriental, and modern rugs.',
    date: '2024-01-10',
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/rug'
  },
  {
    id: 'vehicles',
    title: 'Vehicle Interior Cleaning',
    excerpt: 'Mobile vehicle cleaning service. Professional interior detailing for cars, caravans and boats.',
    date: '2024-01-09',
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
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
    category: 'Pest Control',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/duo-system'
  },
  {
    id: 20,
    title: 'Home Maintenance Tips for Richlands Homeowners',
    excerpt: 'Essential home maintenance checklist to protect your property value and prevent costly repairs.',
    date: '2024-12-08',
    category: 'General',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/20'
  },
  {
    id: 21,
    title: 'Seasonal Pest Prevention Guide for Brisbane Homes',
    excerpt: 'Year-round pest prevention strategies to keep your Brisbane home pest-free through every season.',
    date: '2024-12-07',
    category: 'General',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/21'
  },
  {
    id: 22,
    title: 'Signs Your Home Needs Professional Pest Inspection',
    excerpt: 'Learn the warning signs that indicate it\'s time to call a professional pest control service.',
    date: '2024-12-06',
    category: 'General',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/22'
  },
  {
    id: 23,
    title: 'Protecting Your Home Investment: Pest Control Guide',
    excerpt: 'How regular pest control protects your property value and saves money on repairs.',
    date: '2024-12-05',
    category: 'General',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/23'
  },
  {
    id: 24,
    title: 'DIY vs Professional Pest Control: What You Need to Know',
    excerpt: 'Compare DIY pest control methods with professional services to make the best choice for your home.',
    date: '2024-12-04',
    category: 'General',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/24'
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
  
  const categories = ['All', 'Cleaning', 'Pest Control', 'General'];
  
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
