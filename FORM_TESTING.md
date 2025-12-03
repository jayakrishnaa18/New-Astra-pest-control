# Form Testing Guide

**Last Updated:** November 20, 2024

## Backend Status
✅ Server running on port 5000
✅ Email configured: jkaliki@gitam.in
✅ SMTP working with Gmail

## Email Flow

### When Form is Submitted:

1. **Admin Email (jkaliki@gitam.in) receives:**
   - Subject: "New Quote Request - [Service Name]"
   - Beautiful HTML email with:
     - Customer name
     - Customer email
     - Customer phone
     - Service requested
     - Message (if provided)
   - Professional red/white design matching website

2. **Customer Email receives:**
   - Subject: "Thank You for Your Quote Request - Best 1 Cleaning"
   - Beautiful HTML acknowledgment with:
     - Personalized greeting
     - Confirmation of service requested
     - Their contact details
     - What happens next (24-hour response)
     - Direct contact information
   - Professional red/white design

## Testing Steps

### 1. Test Backend Directly
```bash
curl -X POST http://localhost:5000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"your-email@example.com",
    "phone":"0732455126",
    "service":"Carpet Cleaning",
    "message":"Test message"
  }'
```

Expected response:
```json
{"success":true,"message":"Quote request submitted successfully! Check your email for confirmation."}
```

### 2. Test Frontend Form
1. Go to: http://localhost:3000/contact
2. Fill in the form:
   - Name: Your Name
   - Email: your-email@example.com
   - Phone: 0732455126
   - Service: Select any service
   - Message: Optional message
3. Click "Get Free Quote"
4. Wait for success message
5. Check both emails:
   - Admin email (jkaliki@gitam.in)
   - Customer email (the one you entered)

### 3. Expected Results

**Success Message on Form:**
```
✅ Success! We've sent a confirmation email to [email]. 
Our team will contact you at [phone] within 24 hours.
```

**Admin Email Preview:**
```
🔔 New Quote Request
Best 1 Cleaning & Pest Control

Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Service: [Service Name]
Message: [Customer Message]

Action Required: Please contact the customer as soon as possible.
```

**Customer Email Preview:**
```
✅ Quote Request Received!
Best 1 Cleaning & Pest Control

Thank You, [Name]!

We've successfully received your quote request for [Service].

📋 Your Request Details:
Service: [Service Name]
Contact Phone: [Phone]
Contact Email: [Email]
Your Message: [Message]

⏰ What Happens Next?
Our team will review your request and contact you within 24 hours at [phone].

📞 Need Immediate Assistance?
Call us directly at: 07 3245 5126
Email: info@best1cleaning.com

Best regards,
Best 1 Cleaning Team
Brisbane's Trusted Cleaning & Pest Control Experts
```

## Troubleshooting

### If form doesn't submit:
1. Check browser console for errors (F12)
2. Verify backend is running: `curl http://localhost:5000/api/health`
3. Check server logs for errors
4. Ensure CORS is enabled for localhost:3000

### If emails don't arrive:
1. Check spam/junk folder
2. Verify SMTP credentials in .env file
3. Check server logs for email errors
4. Test SMTP connection manually

## Current Configuration

**SMTP Settings:**
- Host: smtp.gmail.com
- Port: 587
- User: jkaliki@gitam.in
- From: Best 1 Cleaning
- To: jkaliki@gitam.in

**Endpoints:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API: http://localhost:5000/api/quotes
- Health: http://localhost:5000/api/health

## Email Templates

Both emails use:
- Professional HTML design
- Red/white color scheme matching website
- Responsive layout
- Clear call-to-action
- Contact information
- Brand consistency
