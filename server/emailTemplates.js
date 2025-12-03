// Professional Email Templates for Astra Pest Control

const adminEmailTemplate = (name, email, phone, service, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1e293b; background: #f1f5f9; }
    .email-wrapper { background: #f1f5f9; padding: 40px 20px; }
    .email-container { max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #dc2626 100%); padding: 50px 40px; text-align: center; position: relative; }
    .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #dc2626, #fbbf24, #dc2626); }
    .logo { width: 60px; height: 60px; background: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
    .header h1 { color: white; font-size: 32px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; }
    .header p { color: rgba(255,255,255,0.9); font-size: 16px; font-weight: 500; }
    .content { padding: 50px 40px; }
    .alert-banner { background: linear-gradient(135deg, #fef2f2, #fee2e2); border: 2px solid #dc2626; border-radius: 16px; padding: 24px; margin-bottom: 35px; position: relative; overflow: hidden; }
    .alert-banner::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: #dc2626; }
    .alert-banner h3 { color: #991b1b; font-size: 20px; margin-bottom: 8px; display: flex; align-items: center; gap: 10px; }
    .alert-banner p { color: #7f1d1d; font-size: 15px; margin: 0; }
    .section-title { color: #0f172a; font-size: 22px; font-weight: 700; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 3px solid #dc2626; display: inline-block; }
    .info-card { background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 16px; padding: 28px; margin: 24px 0; border: 1px solid #e2e8f0; }
    .info-row { display: flex; padding: 16px 0; border-bottom: 1px solid #cbd5e1; align-items: flex-start; }
    .info-row:last-child { border-bottom: none; }
    .info-label { font-weight: 700; color: #475569; min-width: 140px; font-size: 15px; display: flex; align-items: center; gap: 8px; }
    .info-value { color: #0f172a; font-weight: 600; font-size: 16px; flex: 1; }
    .info-value a { color: #dc2626; text-decoration: none; }
    .info-value a:hover { text-decoration: underline; }
    .cta-section { text-align: center; margin: 40px 0; padding: 35px; background: linear-gradient(135deg, #fef2f2, white); border-radius: 16px; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 18px 48px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 17px; box-shadow: 0 8px 24px rgba(220, 38, 38, 0.3); transition: all 0.3s; }
    .cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(220, 38, 38, 0.4); }
    .footer { background: #0f172a; color: #94a3b8; padding: 40px; text-align: center; }
    .footer-brand { color: white; font-size: 20px; font-weight: 700; margin-bottom: 12px; }
    .footer-tagline { font-size: 14px; margin-bottom: 20px; }
    .footer-contact { font-size: 15px; margin: 8px 0; }
    .footer-contact a { color: #dc2626; text-decoration: none; font-weight: 600; }
    .divider { height: 1px; background: linear-gradient(90deg, transparent, #e2e8f0, transparent); margin: 30px 0; }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="header">
        <div class="logo">AP</div>
        <h1>New Quote Request</h1>
        <p>Astra Pest Control</p>
      </div>
      
      <div class="content">
        <div class="alert-banner">
          <h3>Urgent Action Required</h3>
          <p>A new customer is waiting for your response. Please contact them within 2 hours for best conversion.</p>
        </div>
        
        <h2 class="section-title">Customer Information</h2>
        
        <div class="info-card">
          <div class="info-row">
            <span class="info-label">Full Name</span>
            <span class="info-value">${name}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email Address</span>
            <span class="info-value"><a href="mailto:${email}">${email}</a></span>
          </div>
          <div class="info-row">
            <span class="info-label">Phone Number</span>
            <span class="info-value"><a href="tel:${phone}">${phone}</a></span>
          </div>
          <div class="info-row">
            <span class="info-label">Service Type</span>
            <span class="info-value">${service}</span>
          </div>
          ${message ? `<div class="info-row">
            <span class="info-label">Message</span>
            <span class="info-value">${message}</span>
          </div>` : ''}
        </div>
        
        <div class="divider"></div>
        
        <div class="cta-section">
          <p style="color: #475569; margin-bottom: 20px; font-size: 16px;">Take immediate action to secure this lead</p>
          <a href="tel:${phone}" class="cta-button">Call Customer Now</a>
        </div>
      </div>
      
      <div class="footer">
        <div class="footer-brand">Astra Pest Control</div>
        <div class="footer-tagline">Professional Cleaning & Pest Control Services</div>
        <div class="footer-contact"><a href="tel:0732455126">(07) 3245 5126</a></div>
        <div class="footer-contact"><a href="mailto:info@best1cleaning.com">info@best1cleaning.com</a></div>
        <div style="margin-top: 20px; font-size: 13px; opacity: 0.7;">
          Brisbane • Ipswich • Gold Coast • Sunshine Coast
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const customerEmailTemplate = (name, email, phone, service, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1e293b; background: #f1f5f9; }
    .email-wrapper { background: #f1f5f9; padding: 40px 20px; }
    .email-container { max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #dc2626 100%); padding: 50px 40px; text-align: center; position: relative; }
    .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #dc2626, #fbbf24, #dc2626); }
    .logo { width: 70px; height: 70px; background: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 36px; margin-bottom: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
    .header h1 { color: white; font-size: 36px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; }
    .header p { color: rgba(255,255,255,0.9); font-size: 17px; font-weight: 500; }
    .content { padding: 50px 40px; }
    .success-badge { background: linear-gradient(135deg, #dcfce7, #bbf7d0); border: 2px solid #22c55e; border-radius: 16px; padding: 28px; text-align: center; margin-bottom: 35px; position: relative; overflow: hidden; }
    .success-badge::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: #22c55e; }
    .success-badge h2 { color: #166534; font-size: 26px; margin-bottom: 8px; }
    .success-badge p { color: #15803d; font-size: 16px; margin: 0; }
    .greeting { font-size: 18px; color: #475569; margin-bottom: 24px; line-height: 1.8; }
    .greeting strong { color: #dc2626; }
    .summary-box { background: linear-gradient(135deg, #fef2f2, #fee2e2); border-left: 6px solid #dc2626; border-radius: 16px; padding: 32px; margin: 32px 0; }
    .summary-box h3 { color: #991b1b; font-size: 20px; margin-bottom: 20px; }
    .summary-item { padding: 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.2); }
    .summary-item:last-child { border-bottom: none; }
    .summary-label { font-weight: 700; color: #7f1d1d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
    .summary-value { color: #0f172a; font-size: 17px; font-weight: 600; margin-top: 4px; }
    .timeline { margin: 40px 0; }
    .timeline-title { color: #0f172a; font-size: 24px; font-weight: 700; margin-bottom: 28px; text-align: center; }
    .timeline-step { display: flex; gap: 24px; margin: 24px 0; padding: 24px; background: #f8fafc; border-radius: 16px; border: 2px solid #e2e8f0; transition: all 0.3s; }
    .timeline-step:hover { border-color: #dc2626; transform: translateX(4px); }
    .step-number { width: 56px; height: 56px; background: linear-gradient(135deg, #dc2626, #991b1b); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3); }
    .step-content h4 { color: #0f172a; font-size: 18px; margin-bottom: 6px; }
    .step-content p { color: #64748b; font-size: 15px; margin: 0; }
    .contact-banner { background: linear-gradient(135deg, #dc2626, #991b1b); border-radius: 20px; padding: 40px; text-align: center; margin: 40px 0; color: white; }
    .contact-banner h3 { font-size: 26px; margin-bottom: 12px; }
    .contact-banner p { font-size: 16px; margin-bottom: 28px; opacity: 0.95; }
    .contact-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .contact-btn { display: inline-block; padding: 16px 36px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 16px; transition: all 0.3s; }
    .btn-primary { background: white; color: #dc2626; }
    .btn-primary:hover { background: #f8fafc; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255,255,255,0.3); }
    .btn-secondary { background: rgba(255,255,255,0.15); color: white; border: 2px solid white; }
    .btn-secondary:hover { background: rgba(255,255,255,0.25); }
    .benefits { background: #f8fafc; border-radius: 16px; padding: 32px; margin: 32px 0; }
    .benefits h4 { color: #0f172a; font-size: 20px; margin-bottom: 20px; text-align: center; }
    .benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .benefit-item { display: flex; align-items: center; gap: 12px; color: #475569; font-size: 15px; }
    .benefit-item::before { content: '•'; color: #22c55e; font-weight: 800; font-size: 20px; }
    .footer { background: #0f172a; color: #94a3b8; padding: 40px; text-align: center; }
    .footer-brand { color: white; font-size: 22px; font-weight: 700; margin-bottom: 12px; }
    .footer-tagline { font-size: 15px; margin-bottom: 24px; }
    .footer-contact { font-size: 16px; margin: 10px 0; }
    .footer-contact a { color: #dc2626; text-decoration: none; font-weight: 600; }
    .social-links { margin: 24px 0; }
    .social-link { display: inline-block; width: 40px; height: 40px; background: rgba(255,255,255,0.1); border-radius: 50%; margin: 0 8px; line-height: 40px; text-decoration: none; color: white; font-size: 18px; }
    @media (max-width: 600px) {
      .email-wrapper { padding: 20px 10px; }
      .content { padding: 30px 20px; }
      .benefits-grid { grid-template-columns: 1fr; }
      .contact-buttons { flex-direction: column; }
      .contact-btn { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="header">
        <div class="logo">AP</div>
        <h1>Request Received!</h1>
        <p>Astra Pest Control</p>
      </div>
      
      <div class="content">
        <div class="success-badge">
          <h2>Thank You, ${name}!</h2>
          <p>Your quote request has been successfully submitted and is being reviewed by our team.</p>
        </div>
        
        <p class="greeting">
          We're excited to help you with your <strong>${service}</strong> needs! Our professional team has received your request and will contact you shortly with a customized quote.
        </p>
        
        <div class="summary-box">
          <h3>Your Request Summary</h3>
          <div class="summary-item">
            <div class="summary-label">Service Requested</div>
            <div class="summary-value">${service}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Contact Phone</div>
            <div class="summary-value">${phone}</div>
          </div>
          <div class="summary-item">
            <div class="summary-label">Contact Email</div>
            <div class="summary-value">${email}</div>
          </div>
          ${message ? `<div class="summary-item">
            <div class="summary-label">Your Message</div>
            <div class="summary-value">${message}</div>
          </div>` : ''}
        </div>
        
        <div class="timeline">
          <h3 class="timeline-title">⏰ What Happens Next?</h3>
          
          <div class="timeline-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Review & Assessment</h4>
              <p>Our expert team reviews your request and prepares a customized quote tailored to your specific needs.</p>
            </div>
          </div>
          
          <div class="timeline-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Personal Contact</h4>
              <p>We'll call you at ${phone} within 24 hours to discuss your requirements and provide a detailed quote.</p>
            </div>
          </div>
          
          <div class="timeline-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Service Delivery</h4>
              <p>Schedule your service at a time that's convenient for you. Same-day service available!</p>
            </div>
          </div>
        </div>
        
        <div class="contact-banner">
          <h3>Need Immediate Assistance?</h3>
          <p>Our team is available to help you right away. Don't wait - contact us now!</p>
          <div class="contact-buttons">
            <a href="tel:0732455126" class="contact-btn btn-primary">Call (07) 3245 5126</a>
            <a href="mailto:info@best1cleaning.com" class="contact-btn btn-secondary">Email Us</a>
          </div>
        </div>
        
        <div class="benefits">
          <h4>Why Choose Astra Pest Control?</h4>
          <div class="benefits-grid">
            <div class="benefit-item">15+ Years Experience</div>
            <div class="benefit-item">100% Satisfaction Guarantee</div>
            <div class="benefit-item">Professional Equipment</div>
            <div class="benefit-item">Eco-Friendly Products</div>
            <div class="benefit-item">Same-Day Service Available</div>
            <div class="benefit-item">Fully Insured & Licensed</div>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <div class="footer-brand">Astra Pest Control</div>
        <div class="footer-tagline">Brisbane's Trusted Cleaning & Pest Control Experts</div>
        <div class="footer-contact"><a href="tel:0732455126">(07) 3245 5126</a></div>
        <div class="footer-contact"><a href="mailto:info@best1cleaning.com">info@best1cleaning.com</a></div>
        <div class="social-links">
          <a href="#" class="social-link">f</a>
          <a href="#" class="social-link">IG</a>
          <a href="#" class="social-link">G</a>
        </div>
        <div style="margin-top: 24px; font-size: 14px; opacity: 0.7;">
          Brisbane • Ipswich • Gold Coast • Sunshine Coast
        </div>
        <div style="margin-top: 16px; font-size: 12px; opacity: 0.6;">
          © 2024 Astra Pest Control. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

module.exports = {
  adminEmailTemplate,
  customerEmailTemplate
};
