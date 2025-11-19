import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Rubbish Removal Versus Skip Bin Hire, Which is Better?',
    excerpt: 'When you\'re moving out, cleaning and removing waste come hand in hand. When it comes to junk removal, there are two main options: hiring a skip bin or using a rubbish removal service. Both have pros and cons, so which is the best option for you? This week we explore the differences.',
    date: '2022-09-02',
    category: 'General',
    author: 'Sairam'
  },
  {
    id: 2,
    title: 'Guide To Carpet Cleaning Cost',
    excerpt: 'How Much Does It Cost To Get Your Carpets Cleaned? We like to think that we can handle carpet cleaning on our own. Sure, regular vacuuming will clear up a lot of dirt and give the impression that carpets are spotlessly clean. And if we can\'t fully remove a wine stain or coffee spill, we might try a DIY solution.',
    date: '2022-05-30',
    category: 'Cleaning',
    author: 'Sairam'
  },
  {
    id: 3,
    title: 'Guide to Carpet Cleaning – All Your Questions Answered',
    excerpt: 'Things Every Home Owners Need To Know. Your carpet is one of the most important pieces of upholstery in the house. It also takes up a lot of space and gets stepped on a lot, so you will need to keep it clean. Of course, carpet cleaning is easier said than done.',
    date: '2022-04-26',
    category: 'Cleaning',
    author: 'Sairam'
  },
  {
    id: 4,
    title: '10 Health Benefits Of Carpet Cleaning',
    excerpt: 'The Secret To A Healthier Home. If you want to know the health benefits of carpet cleaning, this infographic with the list of ten below will be a good starting point. Whether you\'re suffering from allergies or susceptible to illnesses due to being immunocompromised, these are benefits that you\'ll appreciate.',
    date: '2022-04-19',
    category: 'Cleaning',
    author: 'Sairam'
  },
  {
    id: 5,
    title: '4 Easy Steps To Get Mud Stains Out Of Carpet',
    excerpt: 'Every parent knows the struggle of trying to keep carpet clean. Kids are your number one culprits – for reasons yet unknown to science, they love to run through your home with their feet or shoes caked in mud, grass and who knows what! Pets are not much better.',
    date: '2017-08-29',
    category: 'Cleaning',
    author: 'Sairam'
  },
  {
    id: 6,
    title: '4 Ways To Winter Proof Your Home From Pests',
    excerpt: 'The winter season is upon us – say welcome to cozy nights sipping hot chocolate in front of a fire, enjoy delicious stews to warm the belly, and bust out those wardrobe favourites that have been hiding away for too long! Unfortunately, winter is also the time many homes become infested with pests.',
    date: '2017-07-01',
    category: 'Pest Control',
    author: 'Sairam'
  },
  {
    id: 7,
    title: 'Give Your Home an Instant Makeover',
    excerpt: 'For many of us, our home is our haven. Having a clean, welcoming and beautiful home makes us feel a little more synchronous… and, if we\'re totally honest, is something of a badge of honour. But on the flipside, when you feel like your house is a mess, this can be a point of stress.',
    date: '2017-06-13',
    category: 'Cleaning',
    author: 'Sairam'
  },
  {
    id: 8,
    title: 'Troubleshoot Your Pest Control Problem',
    excerpt: 'It goes without saying – pests in the home can be a serious nuisance. What makes it even worse is not knowing what the exact issue is. Our pest control Brisbane service is a comprehensive solution that ensures your home remains pest-free, but employing preventative measures is always a good idea.',
    date: '2017-06-13',
    category: 'Pest Control',
    author: 'Sairam'
  },
  {
    id: 9,
    title: 'Avoiding Pests In Your Home Altogether',
    excerpt: 'Ants, cockroaches, fleas or flies in your home are up there with the biggest nuisances. All it takes is a few bugs in the kitchen or a rogue cockroach on the floorboards to make you feel as though your home isn\'t at its cleanest. At Best 1 Cleaning and Pest Control we know how tricky pest control can be.',
    date: '2017-05-05',
    category: 'Pest Control',
    author: 'Sairam'
  },
  {
    id: 10,
    title: 'Simple Ways to Remove Carpet Stains at Home',
    excerpt: 'Between kids, pets, a love for red wine and home cooked meals, getting stains on the carpet is almost inevitable. Removing stains with carpet cleaning can be tough, first of all most carpet tends to hold onto colours and liquids more than we would like and secondly, if you aren\'t careful, a bit of well-intentioned scrubbing can make things worse.',
    date: '2017-05-05',
    category: 'Cleaning',
    author: 'Sairam'
  }
];

function Blog() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Cleaning & Pest Control Blog</h1>
          <p>Expert tips, guides and advice from Best 1 Cleaning and Pest Control professionals</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {blogPosts.map(post => (
              <div key={post.id} className="service-card">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                  <span style={{color: 'var(--primary-red)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                    {post.category}
                  </span>
                  <span style={{color: 'var(--text-gray)', fontSize: '13px'}}>
                    {new Date(post.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 style={{marginBottom: '15px', fontSize: '20px', lineHeight: '1.4'}}>{post.title}</h3>
                <p style={{color: 'var(--text-gray)', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px'}}>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} style={{color: 'var(--primary-red)', textDecoration: 'none', fontWeight: '700', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '5px'}}>
                  Read Full Article <span style={{transition: 'transform 0.3s'}}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Professional Cleaning or Pest Control?</h2>
          <p style={{fontSize: '20px', marginBottom: '35px', position: 'relative', zIndex: 1}}>Get expert service from Brisbane's trusted professionals</p>
          <a href="tel:0732455126" className="btn">Call 07 3245 5126</a>
        </div>
      </section>
    </div>
  );
}

export default Blog;
