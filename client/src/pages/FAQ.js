import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What pest control services do you offer in Brisbane and Gold Coast?",
      answer: "We provide comprehensive pest control including cockroach treatment, ant control, spider removal, rodent control, termite inspections, termite treatments, and commercial pest management for Brisbane, Gold Coast and surrounding suburbs."
    },
    {
      question: "Do you offer termite inspections in Brisbane and Gold Coast?",
      answer: "Yes! We provide thorough termite inspections with detailed reports. Our licensed technicians use the latest detection equipment to identify termite activity and potential risks in your Brisbane or Gold Coast property."
    },
    {
      question: "How much does pest control cost in Brisbane and Gold Coast?",
      answer: "Pricing varies based on property size and pest type. We offer free quotes! Call us at 0450 955 420 for an accurate estimate tailored to your Brisbane or Gold Coast property."
    },
    {
      question: "Are your pest control treatments safe for pets and children?",
      answer: "Absolutely! We use environmentally friendly, low-toxicity products that are completely safe for your family and pets. All treatments are applied by certified technicians following strict safety protocols."
    },
    {
      question: "How long does pest control treatment last?",
      answer: "Most general pest treatments provide 6-12 months of protection. Termite barriers can last up to 8 years. We offer warranties and can schedule follow-up treatments as needed."
    },
    {
      question: "What areas around Brisbane and Gold Coast do you service?",
      answer: "We proudly service Brisbane, Gold Coast and all surrounding suburbs including Logan, Ipswich, Redlands, Moreton Bay, Scenic Rim, and all greater Brisbane and Gold Coast areas."
    },
    {
      question: "Do you offer same-day pest control service?",
      answer: "Yes! We offer same-day service for pest control emergencies in Brisbane and Gold Coast. Just give us a call and we'll do our best to accommodate your schedule."
    },
    {
      question: "What types of termite treatments do you offer?",
      answer: "We offer chemical barrier treatments, termite baiting systems, and timber treatments. Our licensed technicians will recommend the best solution based on your property's specific needs and termite activity."
    },
    {
      question: "How do I know if I have termites?",
      answer: "Common signs include mud tubes on walls, hollow-sounding timber, discarded wings, and visible damage to wood. If you suspect termites in your Brisbane or Gold Coast property, contact us immediately for a professional inspection."
    },
    {
      question: "Do you provide commercial pest control services?",
      answer: "Yes! We provide tailored pest management solutions for businesses, restaurants, warehouses, and commercial properties in Brisbane and Gold Coast. We offer regular maintenance programs and emergency services."
    },
    {
      question: "Do you offer a guarantee on your services?",
      answer: "Yes! We offer a 100% satisfaction guarantee on all pest control services. If pests return within the warranty period, we'll re-treat at no extra cost."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards (Visa, Mastercard, Amex), bank transfers, and EFTPOS. Payment is due upon completion of service."
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
                <a href="tel:0450955420" className="contact-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Call 0450 955 420
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0726046149!2d152.8412!3d-27.4698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890"
                    width="100%" 
                    height="180" 
                    style={{border: 0, borderRadius: '8px'}} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Location"
                  ></iframe>
                </div>
                <a 
                  href="https://www.google.com/maps/place/Brisbane+QLD/@-27.4698,152.8412,10z"
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
            <a href="tel:0450955420" className="cta-secondary">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
