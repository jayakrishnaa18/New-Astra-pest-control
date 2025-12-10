const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();

// Trust proxy - required for Render
app.set('trust proxy', 1);

// Force HTTPS in production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

// Security middleware with YouTube iframe support
app.use(helmet({ 
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      frameSrc: ["'self'", "https://www.youtube.com", "https://www.google.com"],
      connectSrc: ["'self'"]
    }
  },
  crossOriginEmbedderPolicy: false 
}));
app.use(compression());

// Rate limiting
const limiter = rateLimit({ 
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: 'Too many requests, please try again later.'
});
app.use('/api/', limiter);

// CORS
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [process.env.CLIENT_URL]
  : ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({ 
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email transporter with timeout settings
// Email transporter configuration
// For Render: Use SendGrid SMTP (smtp.sendgrid.net:587) as Render blocks Gmail SMTP
// For local: Can use Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 2525,
  secure: false, // Use STARTTLS for port 2525
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000
});

// Verify SMTP connection
transporter.verify(function(error, success) {
  if (error) {
    console.error('[ERROR] SMTP Connection Error:', error.message);
    console.error('[INFO] Email sending will fail. Check SMTP credentials.');
  } else {
    console.log('[OK] SMTP Server is ready to send emails');
  }
});

// Quote submission endpoint
app.post('/api/quotes', async (req, res) => {
  try {
    console.log('[RECV] Raw request body:', req.body);
    
    const { firstName, lastName, email, phone, service, timeframe, message } = req.body;
    const name = `${firstName} ${lastName}`;
    
    console.log('[QUOTE] Quote request received:', { firstName, lastName, email, phone, service, timeframe });

    if (!firstName || !lastName || !email || !phone || !service || !timeframe) {
      console.log('[ERROR] Validation failed - missing fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields',
        missing: {
          firstName: !firstName,
          lastName: !lastName,
          email: !email,
          phone: !phone,
          service: !service,
          timeframe: !timeframe
        }
      });
    }

    // Admin notification email
    const adminMailOptions = {
      from: `"Astra Pest Control" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'jkaliki@gitam.in',
      subject: ` New Quote Request - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background: #f8fafc; }
            .container { max-width: 650px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0 0 10px 0; font-size: 28px; font-weight: 700; }
            .header p { margin: 0; font-size: 16px; opacity: 0.95; }
            .content { padding: 40px 30px; }
            .alert-box { background: #fef2f2; border-left: 4px solid #dc2626; padding: 20px; margin-bottom: 30px; border-radius: 8px; }
            .alert-box strong { color: #dc2626; font-size: 18px; }
            .detail-card { background: #f8fafc; padding: 20px; margin: 15px 0; border-radius: 12px; border: 1px solid #e2e8f0; }
            .detail-row { display: flex; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
            .detail-row:last-child { border-bottom: none; }
            .label { font-weight: 700; color: #475569; min-width: 120px; }
            .value { color: #0f172a; font-weight: 500; }
            .footer { background: #f8fafc; padding: 30px; text-align: center; color: #64748b; font-size: 14px; }
            .cta-button { display: inline-block; background: #dc2626; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Quote Request</h1>
              <p>Astra Pest Control</p>
            </div>
            <div class="content">
              <div class="alert-box">
                <strong>Action Required</strong>
                <p style="margin: 10px 0 0 0;">A new customer is waiting for your response. Please contact them as soon as possible.</p>
              </div>
              
              <h2 style="color: #0f172a; margin-bottom: 20px;">Customer Details</h2>
              <div class="detail-card">
                <div class="detail-row">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></span>
                </div>
                <div class="detail-row">
                  <span class="label">Phone:</span>
                  <span class="value"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a></span>
                </div>
                <div class="detail-row">
                  <span class="label">Service:</span>
                  <span class="value">${service}</span>
                </div>
                ${message ? `<div class="detail-row">
                  <span class="label">Message:</span>
                  <span class="value">${message}</span>
                </div>` : ''}
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="tel:${phone}" class="cta-button">Call Customer Now</a>
              </div>
            </div>
            <div class="footer">
              <p><strong>Astra Pest Control</strong></p>
              <p>Professional Cleaning & Pest Control Services</p>
              <p style="margin-top: 10px;">0450 955 420 | Astrapestcontrol.au@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Customer acknowledgment email
    const customerMailOptions = {
      from: `"Astra Pest Control" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank You for Your Quote Request - Astra Pest Control',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background: #f8fafc; }
            .container { max-width: 650px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0 0 10px 0; font-size: 32px; font-weight: 700; }
            .header p { margin: 0; font-size: 16px; opacity: 0.95; }
            .content { padding: 40px 30px; }
            .success-badge { background: #dcfce7; color: #166534; padding: 16px 24px; border-radius: 12px; text-align: center; margin-bottom: 30px; border: 2px solid #86efac; }
            .success-badge h3 { margin: 0; font-size: 20px; }
            .info-box { background: #f8fafc; padding: 25px; margin: 25px 0; border-radius: 12px; border-left: 4px solid #dc2626; }
            .info-box h3 { margin: 0 0 15px 0; color: #0f172a; font-size: 18px; }
            .detail-item { padding: 10px 0; color: #475569; }
            .detail-item strong { color: #0f172a; }
            .timeline { margin: 30px 0; }
            .timeline-item { display: flex; gap: 20px; margin: 20px 0; }
            .timeline-icon { width: 40px; height: 40px; background: #fee2e2; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
            .timeline-content h4 { margin: 0 0 5px 0; color: #0f172a; }
            .timeline-content p { margin: 0; color: #64748b; font-size: 14px; }
            .contact-box { background: linear-gradient(135deg, #fef2f2, #fee2e2); padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; }
            .contact-box h3 { margin: 0 0 15px 0; color: #0f172a; }
            .contact-button { display: inline-block; background: #dc2626; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 5px; }
            .footer { background: #f8fafc; padding: 30px; text-align: center; color: #64748b; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>[OK] Request Received!</h1>
              <p>Astra Pest Control</p>
            </div>
            <div class="content">
              <div class="success-badge">
                <h3> Thank You, ${name}!</h3>
                <p style="margin: 5px 0 0 0;">Your quote request has been successfully submitted.</p>
              </div>
              
              <p style="font-size: 16px; color: #475569;">We're excited to help you with your <strong style="color: #dc2626;">${service}</strong> needs. Our professional team is reviewing your request and will get back to you shortly.</p>
              
              <div class="info-box">
                <h3> Your Request Summary</h3>
                <div class="detail-item"><strong>Service Requested:</strong> ${service}</div>
                <div class="detail-item"><strong>Contact Phone:</strong> ${phone}</div>
                <div class="detail-item"><strong>Contact Email:</strong> ${email}</div>
                ${message ? `<div class="detail-item"><strong>Your Message:</strong> ${message}</div>` : ''}
              </div>

              <div class="timeline">
                <h3 style="color: #0f172a; margin-bottom: 20px;"> What Happens Next?</h3>
                <div class="timeline-item">
                  <div class="timeline-icon"></div>
                  <div class="timeline-content">
                    <h4>Review & Assessment</h4>
                    <p>Our team reviews your request and prepares a customized quote</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-icon"></div>
                  <div class="timeline-content">
                    <h4>Personal Contact</h4>
                    <p>We'll call you at ${phone} within 24 hours</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-icon"></div>
                  <div class="timeline-content">
                    <h4>Service Delivery</h4>
                    <p>Schedule your service at a convenient time</p>
                  </div>
                </div>
              </div>

              <div class="contact-box">
                <h3> Need Immediate Assistance?</h3>
                <p style="margin-bottom: 20px; color: #475569;">Our team is available to help you right away</p>
                <a href="tel:0450955420" class="contact-button">Call 0450 955 420</a>
                <a href="mailto:Astrapestcontrol.au@gmail.com" class="contact-button" style="background: #0f172a;">Email Us</a>
              </div>

              <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
                <strong>Why Choose Astra Pest Control?</strong><br>
                • 15+ Years Experience | • 100% Satisfaction Guarantee | • Professional Equipment | • Eco-Friendly Products
              </p>
            </div>
            <div class="footer">
              <p><strong>Astra Pest Control</strong></p>
              <p>Brisbane's Trusted Cleaning & Pest Control Experts</p>
              <p style="margin-top: 10px;"> 0450 955 420 | [EMAIL] Astrapestcontrol.au@gmail.com</p>
              <p style="margin-top: 15px; font-size: 12px;">Brisbane • Ipswich • Gold Coast • Sunshine Coast</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send emails with proper error handling
    try {
      // Send both emails and track results
      const [adminResult, customerResult] = await Promise.allSettled([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(customerMailOptions)
      ]);

      // Check if at least one email succeeded
      const adminSuccess = adminResult.status === 'fulfilled';
      const customerSuccess = customerResult.status === 'fulfilled';

      if (adminSuccess) {
        console.log('[OK] Admin email sent - ID:', adminResult.value.messageId);
      } else {
        console.error('[ERROR] Admin email failed:', adminResult.reason.message);
      }

      if (customerSuccess) {
        console.log('[OK] Customer email sent - ID:', customerResult.value.messageId);
      } else {
        console.error('[ERROR] Customer email failed:', customerResult.reason.message);
      }

      // If both emails failed, return error
      if (!adminSuccess && !customerSuccess) {
        console.error('[CRITICAL] Both emails failed!');
        return res.status(500).json({ 
          success: false, 
          message: 'Unable to send confirmation email. Please call us directly at 0450 955 420 or email Astrapestcontrol.au@gmail.com.au' 
        });
      }

      // If at least one email sent, return success
      return res.status(201).json({ 
        success: true, 
        message: 'Quote request submitted successfully!' 
      });

    } catch (emailError) {
      console.error('[ERROR] Email system error:', emailError.message);
      return res.status(500).json({ 
        success: false, 
        message: 'Unable to send request. Please call us at 0450 955 420 or email Astrapestcontrol.au@gmail.com.au' 
      });
    }

  } catch (error) {
    console.error('[ERROR] Server error:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing request. Please call us at 07 3245 5126' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '../client/build');
  console.log('[STATIC] Serving static files from:', buildPath);
  
  app.use(express.static(buildPath));
  
  app.get('*', (req, res) => {
    const indexPath = path.join(buildPath, 'index.html');
    console.log(' Serving index.html from:', indexPath);
    res.sendFile(indexPath);
  });
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'API is running. Use the React dev server for the frontend.' });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[START] Astra Pest Control Server running on port ${PORT}`);
  console.log(`[EMAIL] Email: ${process.env.SMTP_USER}`);
  console.log(`[ENV] Environment: ${process.env.NODE_ENV || 'development'}`);
});
