import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide professional carpet cleaning, upholstery cleaning, tile & grout cleaning, pest control, termite treatment, and more. All services come with a 100% satisfaction guarantee."
    },
    {
      question: "How much does carpet cleaning cost?",
      answer: "Pricing varies based on the size and condition of your carpet. We offer free quotes! Call us at (07) 3245 5126 for an accurate estimate tailored to your needs."
    },
    {
      question: "Are your cleaning products safe for pets and children?",
      answer: "Absolutely! We use eco-friendly, non-toxic cleaning products that are completely safe for your family and pets. Your safety is our top priority."
    },
    {
      question: "How long does carpet cleaning take?",
      answer: "Most carpet cleaning jobs take 2-4 hours depending on the size. Carpets typically dry within 6-8 hours, though we recommend waiting 24 hours before heavy use."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes! We offer same-day service for both cleaning and pest control emergencies. Just give us a call and we'll do our best to accommodate your schedule."
    },
    {
      question: "What areas do you service?",
      answer: "We service Brisbane, Ipswich, Gold Coast, Sunshine Coast, and all surrounding suburbs across Queensland."
    },
    {
      question: "How often should I get my carpets professionally cleaned?",
      answer: "We recommend professional carpet cleaning at least twice a year. High-traffic areas or homes with pets may benefit from quarterly cleaning."
    },
    {
      question: "Are your pest control treatments safe?",
      answer: "Yes! We use environmentally friendly, low-toxicity products. Our treatments are safe for your family and pets when applied by our certified technicians."
    },
    {
      question: "How long does pest control treatment last?",
      answer: "Most treatments provide 6-12 months of protection. We offer warranties and can schedule follow-up treatments as needed."
    },
    {
      question: "Do you offer a guarantee?",
      answer: "Yes! We offer a 100% satisfaction guarantee on all services. If you're not happy, we'll make it right at no extra cost. We also provide bond-back guarantees for rental properties."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards (Visa, Mastercard, Amex), bank transfers, and EFTPOS. Payment is due upon completion of service."
    },
    {
      question: "Do I need to be home during the service?",
      answer: "Not necessarily. Many customers provide access and leave us to work. However, we're happy to work around your schedule if you prefer to be present."
    }
  ];

  return (
    <div className="faq-page-new">
      {/* Hero */}
      <section className="faq-hero-new">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about our services</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="faq-main">
        <div className="container">
          <div className="faq-layout">
            {/* FAQ List */}
            <div className="faq-questions">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-box ${openIndex === index ? 'open' : ''}`}
                >
                  <button 
                    className="faq-btn"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="faq-q">{faq.question}</span>
                    <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-a">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="faq-side">
              {/* Contact Card */}
              <div className="side-card contact-card">
                <h3>Need Help?</h3>
                <p>Can't find what you're looking for?</p>
                <a href="tel:0732455126" className="contact-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Call (07) 3245 5126
                </a>
                <Link to="/contact" className="contact-btn secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Send Message
                </Link>
              </div>

              {/* Map Card */}
              <div className="side-card map-card">
                <h3>Our Location</h3>
                <div className="map-embed">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1839392.8999999998!2d153.1078203!3d-27.467725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915c270ff9490d%3A0xb72b4c06b07a9eb5!2sBest%201%20Cleaning!5e0!3m2!1sen!2sau!4v1732188226000!5m2!1sen!2sau"
                    width="100%" 
                    height="180" 
                    style={{border: 0, borderRadius: '8px'}} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Location"
                  ></iframe>
                </div>
                <a 
                  href="https://www.google.com/maps/place/Best+1+Cleaning/@-27.467725,153.1078203,9z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Get Directions →
                </a>
              </div>

              {/* Hours Card */}
              <div className="side-card hours-card">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hour-row">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-row">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hour-row">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta-new">
        <div className="container">
          <h2>Ready to Book Your Service?</h2>
          <p>Get a free quote today - no obligation</p>
          <div className="cta-btns">
            <Link to="/contact" className="cta-primary">Get Free Quote</Link>
            <a href="tel:0732455126" className="cta-secondary">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
