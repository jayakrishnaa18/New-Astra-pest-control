import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Pest Control in Brisbane & Gold Coast: Protect Your Home',
    excerpt: 'Everything Brisbane & Gold Coast homeowners need to know about effective pest control. From prevention to professional treatment options.',
    date: '2024-12-01',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1583912267550-3c3f27d8c95b?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/1'
  },
  {
    id: 2,
    title: 'Termite Inspection Brisbane & Gold Coast: When and Why You Need Professional Help',
    excerpt: 'Protect your Brisbane & Gold Coast property with regular termite inspections. Learn the signs, costs, and benefits of professional termite detection.',
    date: '2024-11-28',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/2'
  },
  {
    id: 3,
    title: 'Cockroach Control Brisbane & Gold Coast: Effective Solutions for Your Home',
    excerpt: 'Say goodbye to cockroaches with proven control methods. Expert tips for Brisbane & Gold Coast residents to eliminate and prevent cockroach infestations.',
    date: '2024-11-25',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/8'
  },
  {
    id: 4,
    title: 'Rodent Control Brisbane & Gold Coast: Rats and Mice Prevention Guide',
    excerpt: 'Keep rats and mice out of your Brisbane & Gold Coast home with professional rodent control strategies. Prevention tips and treatment options.',
    date: '2024-11-22',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/18'
  },
  {
    id: 5,
    title: 'Bed Bug Treatment Brisbane & Gold Coast: Complete Elimination Guide',
    excerpt: 'Professional bed bug treatment solutions for Brisbane & Gold Coast homes. Learn identification, prevention, and effective elimination methods.',
    date: '2024-11-19',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/11'
  },
  {
    id: 6,
    title: 'Spider Control Brisbane & Gold Coast: Safe and Effective Removal Methods',
    excerpt: 'Professional spider control for Brisbane & Gold Coast properties. Identify dangerous spiders and learn safe removal techniques.',
    date: '2024-11-16',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/17'
  },
  {
    id: 7,
    title: 'Flea Control Brisbane & Gold Coast: Protect Your Pets and Family',
    excerpt: 'Comprehensive flea control solutions for Brisbane & Gold Coast homes. Pet-safe treatments and prevention strategies.',
    date: '2024-11-13',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/7'
  },
  {
    id: 8,
    title: 'Ant Control Brisbane & Gold Coast: Stop Ant Invasions Before They Start',
    excerpt: 'Effective ant control strategies for Brisbane & Gold Coast homeowners. Identify ant species and implement targeted treatment plans.',
    date: '2024-11-10',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&q=80',
    readTime: '5 min read',
    link: '/blog/16'
  },
  {
    id: 9,
    title: 'Silverfish Control Brisbane & Gold Coast: Eliminate These Silent Invaders',
    excerpt: 'Professional silverfish control for Brisbane & Gold Coast homes. Learn about silverfish behavior and effective elimination methods.',
    date: '2024-11-07',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/9'
  },
  {
    id: 10,
    title: 'Wasp and Bee Removal Brisbane & Gold Coast: Safe Professional Services',
    excerpt: 'Safe wasp and bee removal in Brisbane & Gold Coast. Professional techniques to protect your family while preserving beneficial insects.',
    date: '2024-11-04',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/14'
  },
  {
    id: 11,
    title: 'Seasonal Pest Control Brisbane & Gold Coast: Year-Round Protection Guide',
    excerpt: 'Seasonal pest control calendar for Brisbane & Gold Coast. Learn which pests are active each season and how to prepare your home.',
    date: '2024-11-01',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/6'
  },
  {
    id: 12,
    title: 'Commercial Pest Control Brisbane & Gold Coast: Protect Your Business',
    excerpt: 'Professional commercial pest control services in Brisbane & Gold Coast. Maintain hygiene standards and protect your business reputation.',
    date: '2024-10-29',
    category: 'Pest Control',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/20'
  },
  {
    id: 13,
    title: 'Guide To Carpet Cleaning Cost in Brisbane & Gold Coast',
    excerpt: 'How Much Does It Cost To Get Your Carpets Cleaned in Brisbane & Gold Coast? Get the complete breakdown of professional carpet cleaning costs.',
    date: '2024-10-26',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/2'
  },
  {
    id: 14,
    title: 'Guide to Carpet Cleaning Brisbane & Gold Coast – All Your Questions Answered',
    excerpt: 'Everything Brisbane & Gold Coast homeowners need to know about maintaining and cleaning their carpets professionally.',
    date: '2024-10-23',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/3'
  },
  {
    id: 15,
    title: '10 Health Benefits Of Carpet Cleaning for Brisbane & Gold Coast Families',
    excerpt: 'The Secret To A Healthier Home in Brisbane & Gold Coast. Discover how professional carpet cleaning improves your family\'s health.',
    date: '2024-10-20',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/4'
  },
  {
    id: 16,
    title: '4 Easy Steps To Get Mud Stains Out Of Carpet - Brisbane & Gold Coast Guide',
    excerpt: 'Remove stubborn mud stains from your Brisbane & Gold Coast home carpets with these proven professional techniques.',
    date: '2024-10-17',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80',
    readTime: '4 min read',
    link: '/blog/5'
  },
  {
    id: 17,
    title: 'Upholstery Cleaning Brisbane & Gold Coast: Restore Your Furniture',
    excerpt: 'Professional upholstery cleaning in Brisbane & Gold Coast. Restore sofas, chairs, and fabric furniture with expert cleaning techniques.',
    date: '2024-10-14',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/25'
  },
  {
    id: 18,
    title: 'Tile and Grout Cleaning Brisbane & Gold Coast: Restore Your Floors',
    excerpt: 'Professional tile and grout cleaning services in Brisbane & Gold Coast. Remove stains, mold, and restore your tiles to like-new condition.',
    date: '2024-10-11',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/26'
  },
  {
    id: 19,
    title: 'Mattress Cleaning Brisbane & Gold Coast: Healthy Sleep Solutions',
    excerpt: 'Professional mattress cleaning in Brisbane & Gold Coast. Remove dust mites, allergens, and stains for healthier sleep.',
    date: '2024-10-08',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/27'
  },
  {
    id: 20,
    title: 'Bond Cleaning Brisbane & Gold Coast: Get Your Full Deposit Back',
    excerpt: 'Professional bond cleaning services in Brisbane & Gold Coast. Guaranteed to meet real estate standards and secure your full deposit return.',
    date: '2024-10-05',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/28'
  },
  {
    id: 21,
    title: 'Rug Cleaning Brisbane & Gold Coast: Preserve Your Investment',
    excerpt: 'Specialist rug cleaning services in Brisbane & Gold Coast. Expert care for Persian, wool, and delicate rugs with professional techniques.',
    date: '2024-10-02',
    category: 'Cleaning',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/29'
  },
  {
    id: 26,
    title: 'Professional Carpet Cleaning Services',
    excerpt: 'Comprehensive guide to professional carpet cleaning services. Methods, benefits, and what to expect from expert cleaners.',
    date: '2022-03-15',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/20'
  },
  {
    id: 27,
    title: 'Tile and Grout Cleaning',
    excerpt: 'Professional tile and grout cleaning services. Remove stains, mold, and restore your tiles to like-new condition.',
    date: '2022-03-12',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/21'
  },
  {
    id: 28,
    title: 'Upholstery Cleaning',
    excerpt: 'Professional upholstery cleaning services. Restore sofas, chairs, and fabric furniture with expert cleaning techniques.',
    date: '2022-03-09',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/22'
  },
  {
    id: 29,
    title: 'Leather Seat Cleaning',
    excerpt: 'Specialist leather cleaning services. Professional care for leather furniture, car seats, and upholstery.',
    date: '2022-03-06',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    readTime: '5 min read',
    link: '/blog/23'
  },
  {
    id: 30,
    title: 'Mould Removal Services',
    excerpt: 'Professional mould removal and remediation services. Protect your health with expert mould elimination techniques.',
    date: '2022-03-03',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/24'
  },
  {
    id: 31,
    title: 'Professional Rug Cleaning',
    excerpt: 'Specialist rug cleaning services. Expert care for Persian, wool, and delicate rugs with professional techniques.',
    date: '2022-02-28',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/25'
  },
  {
    id: 32,
    title: 'Vehicle Interior Cleaning',
    excerpt: 'Professional car, caravan, and boat interior cleaning services. Deep cleaning for all vehicle types.',
    date: '2022-02-25',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/26'
  },
  {
    id: 33,
    title: 'Emergency Flood Water Extraction',
    excerpt: 'Emergency flood damage restoration services. Fast water extraction and drying to prevent further damage.',
    date: '2022-02-22',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/27'
  },
  {
    id: 34,
    title: 'Commercial Carpet Cleaning',
    excerpt: 'Professional commercial carpet cleaning services. Maintain workplace hygiene and professional appearance.',
    date: '2022-02-19',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/28'
  },
  {
    id: 35,
    title: 'End of Lease Bond Cleaning',
    excerpt: 'Professional bond cleaning services. Guaranteed to meet real estate standards and secure your full deposit return.',
    date: '2022-02-16',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/29'
  },
  {
    id: 36,
    title: 'Mattress Deep Cleaning',
    excerpt: 'Professional mattress cleaning services. Remove dust mites, allergens, and stains for healthier sleep.',
    date: '2022-02-13',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/30'
  },
  {
    id: 37,
    title: 'Pest Prevention Tips for Brisbane & Gold Coast Homeowners',
    excerpt: 'Simple yet effective pest prevention strategies for Brisbane & Gold Coast homes. Stop infestations before they start with these expert tips.',
    date: '2024-09-29',
    category: 'General',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/21'
  },
  {
    id: 38,
    title: 'Signs You Need Professional Pest Control in Brisbane & Gold Coast',
    excerpt: 'Recognize the warning signs that indicate you need professional pest control services. Early detection saves time and money.',
    date: '2024-09-26',
    category: 'General',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/22'
  },
  {
    id: 39,
    title: 'Eco-Friendly Pest Control Solutions for Brisbane & Gold Coast Families',
    excerpt: 'Safe, eco-friendly pest control methods that protect your family and the environment. Green solutions for modern homes.',
    date: '2024-09-23',
    category: 'General',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    readTime: '8 min read',
    link: '/blog/23'
  },
  {
    id: 40,
    title: 'Cost of Pest Control Services in Brisbane & Gold Coast: Complete Guide',
    excerpt: 'Transparent pricing guide for pest control services in Brisbane & Gold Coast. Understand costs and get the best value for your investment.',
    date: '2024-09-20',
    category: 'General',
    author: 'Astra Pest Control',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    readTime: '9 min read',
    link: '/blog/24'
  }
];

const categories = ['All', 'Pest Control', 'Cleaning', 'General'];

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  const featuredPost = filteredPosts[0];
  const regularPosts = currentPosts.slice(1);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page-pro">
      {/* Hero Section */}
      <section className="blog-hero-pro">
        <div className="container">
          <span className="hero-label">Expert Insights</span>
          <h1>Pest Control Blog</h1>
          <p>Expert tips, guides, and insights for effective pest control in Brisbane, Gold Coast and surrounding areas</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="blog-main-pro">
        <div className="container">
          {/* Category Filters */}
          <div className="blog-filters-pro">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn-pro ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {currentPage === 1 && featuredPost && (
            <Link to={featuredPost.link} className="featured-post-pro">
              <div className="featured-content-pro">
                <div className="featured-meta-pro">
                  <span className="category-badge">{featuredPost.category}</span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className="featured-footer-pro">
                  <span className="read-link-pro">Read Article →</span>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Grid */}
          <div className="blog-grid-pro">
            {regularPosts.map((post, index) => (
              <Link key={post.id} to={post.link} className="blog-card-pro" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-content-pro">
                  <div className="card-meta-pro">
                    <span className="category-badge">{post.category}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="card-footer-pro">
                    <span className="read-article-btn">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn" 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                className="page-btn" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
