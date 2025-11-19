import React, { useState } from 'react';
import './QuoteForm.css';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (message) setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('success');
        setMessage(`✅ Success! We've sent a confirmation email to ${formData.email}. Our team will contact you at ${formData.phone} within 24 hours.`);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 8000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setMessage('⚠️ Unable to submit form online. Please call us directly at 07 3245 5126 or email info@best1cleaning.com');
      
      setTimeout(() => {
        setStatus('idle');
      }, 8000);
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      {message && (
        <div className={`form-message ${status}`}>
          {message}
        </div>
      )}
      
      <div className="form-group">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name *" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          disabled={status === 'loading'}
        />
      </div>
      
      <div className="form-group">
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email *" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          disabled={status === 'loading'}
        />
      </div>
      
      <div className="form-group">
        <input 
          type="tel" 
          name="phone" 
          placeholder="Your Phone (e.g., 0732455126) *" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
          disabled={status === 'loading'}
        />
      </div>
      
      <div className="form-group">
        <select 
          name="service" 
          value={formData.service} 
          onChange={handleChange} 
          required
          disabled={status === 'loading'}
        >
          <option value="">Select Service *</option>
          <option value="Carpet Cleaning">Carpet Cleaning</option>
          <option value="Pest Control">Pest Control</option>
          <option value="Upholstery Cleaning">Upholstery Cleaning</option>
          <option value="Mattress Cleaning">Mattress Cleaning</option>
          <option value="Rug Cleaning">Rug Cleaning</option>
          <option value="Bond Cleaning">Bond Cleaning</option>
        </select>
      </div>
      
      <div className="form-group">
        <textarea 
          name="message" 
          placeholder="Tell us more about your requirements (optional)" 
          value={formData.message} 
          onChange={handleChange} 
          rows="4"
          disabled={status === 'loading'}
        />
      </div>
      
      <button type="submit" className="submit-btn" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <span className="loading"></span> Sending...
          </span>
        ) : 'Get Free Quote'}
      </button>
      
      <p className="form-footer">
        Or call us directly: <a href="tel:0732455126">07 3245 5126</a>
      </p>
    </form>
  );
}

export default QuoteForm;
