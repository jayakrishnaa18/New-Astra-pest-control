import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When does the carpet become safe to use after cleaning?",
      answer: "Once the cleaning is done your carpet will be somewhat damp and generally takes around 3-8 hours to fully dry. However, we recommend that you use or walk over the carpet only after 24 hours. You can also switch on an external fan or air drier to ensure fast drying and use the carpet within 12 hours of the cleaning."
    },
    {
      question: "Why should we hire professionals for carpet cleaning?",
      answer: "Professional cleaners have experience in the carpet cleaning industry and hence they clean the carpets in a better way. Professional carpet cleaning teams have innovative cleaning equipment and supplies to ensure thorough cleaning of your carpets. They are able to remove even the dirt and grime that is trapped deep inside the carpet fibres."
    },
    {
      question: "How long is the steam cleaning process?",
      answer: "Steam carpet cleaning is the most recommended carpet cleaning method. Also known as hot water extraction method, this method effectively removes the dirt and grime from deep inside your carpet fibers. It takes around 4-6 hours depending upon the size of the carpet for the carpet steam cleaning process to get completed."
    },
    {
      question: "Will the furniture be moved for the carpet cleaning service?",
      answer: "If you have placed some heavy furniture on the carpet, then it will not be possible for us to move it. Hence, in order to get your carpet cleaned, you have to remove any furniture placed on it. Anything placed on the carpet doesn't allow to operate the cleaning tools and equipment efficiently."
    },
    {
      question: "How often should I hire professional carpet cleaning services?",
      answer: "Carpets go through so much daily. They are walked on, things spill over them, pets sit on them and so on. It makes them a breeding ground for bacteria and viruses, so you need to get them cleaned professionally at least twice a year apart from doing regular vacuuming."
    },
    {
      question: "Do you offer a carpet dry cleaning service?",
      answer: "Yes, we also offer carpet dry cleaning service. We offer carpet stain removal, sanitising, deodorising and carpet steam cleaning services at best and competitive prices."
    },
    {
      question: "Which is the best carpet cleaning method?",
      answer: "Carpet steam cleaning is the best carpet cleaning method. It uses truck-mounted machines and quality cleaning supplies to remove the dirt, stains, allergens and grime which are deeply stuck inside the carpet fibres. This method is also called hot water extraction method and uses the power of steam to thoroughly clean the carpets."
    },
    {
      question: "Do you also provide same day carpet cleaning services?",
      answer: "Yes, we do. If you are looking for same day carpet cleaning, then we can help you. You just need to book our services online or on call and tell us your needs. We will reach your place within a few hours of booking."
    },
    {
      question: "Can you remove all kinds of stains from your carpets?",
      answer: "We try to get rid of even the most difficult to remove stains from your carpets without damaging your carpet fibers. However, there are some types of stubborn stains that can't be removed. So, before promising anything, we check the nature of stains and then try to remove the stains completely."
    },
    {
      question: "Are your services safe for kids and pets?",
      answer: "We are a customer-centric carpet cleaning business and hence we are very much concerned about the well-being of our clients and their family. So, we use quality and safe cleaning products which are free from harmful chemicals to clean your carpets."
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <span className="hero-badge">Help Center</span>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our cleaning and pest control services</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-sidebar">
              <div className="faq-contact-card">
                <h3>Still have questions?</h3>
                <p>Can't find the answer you're looking for? Please contact our friendly team.</p>
                <Link to="/contact" className="btn-contact">Contact Us</Link>
                <a href="tel:0732455126" className="btn-phone">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (07) 3245 5126
                </a>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                  <button 
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className="faq-icon" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                    >
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
