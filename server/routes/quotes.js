const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    const quote = new Quote({ name, email, phone, service, message });
    await quote.save();

    // Admin notification
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'New Quote Request - Best 1 Cleaning',
      html: `<h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>`
    });

    // Customer confirmation
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: 'Quote Request Received - Best 1 Cleaning',
      html: `<h2>Thank You ${name}!</h2>
        <p>We've received your quote request for <strong>${service}</strong>.</p>
        <p>Our team will contact you shortly at ${phone}.</p>
        <p>Best regards,<br>Best 1 Cleaning Team<br>07 3245 5126</p>`
    });

    res.status(201).json({ success: true, message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Quote error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
