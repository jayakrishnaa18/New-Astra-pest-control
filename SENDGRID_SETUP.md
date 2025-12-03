# SendGrid Email Setup for Render

## Why SendGrid?
Render's free tier **blocks outbound SMTP connections** on ports 25, 465, and 587. This means Gmail SMTP won't work. SendGrid provides an API-based email service that works on Render.

## Setup Steps

### 1. Create SendGrid Account
1. Go to https://sendgrid.com
2. Sign up for a **free account** (100 emails/day)
3. Verify your email address

### 2. Create API Key
1. Log in to SendGrid dashboard
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it: `Astra-Pest-Control-Render`
5. Select **Full Access** or **Restricted Access** with Mail Send permissions
6. Click **Create & View**
7. **COPY THE API KEY** (you won't see it again!)

### 3. Verify Sender Email
1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in your details:
   - From Name: `Astra Pest Control`
   - From Email: `jkaliki@gitam.in` (or your business email)
   - Reply To: Same as From Email
   - Company Address: Your business address
4. Check your email and click the verification link

### 4. Update Render Environment Variables
1. Go to your Render dashboard
2. Select your web service
3. Go to **Environment** tab
4. Update these variables:

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=<your-sendgrid-api-key-from-step-2>
EMAIL_TO=jkaliki@gitam.in
```

5. Click **Save Changes**
6. Render will automatically redeploy

### 5. Test Email Sending
1. Wait for Render to finish deploying
2. Go to your website
3. Submit a quote form
4. Check:
   - Form shows success message
   - Admin receives email at `jkaliki@gitam.in`
   - Customer receives confirmation email
   - Check Render logs for `[OK] Admin notification sent` and `[OK] Customer acknowledgment sent`

## Troubleshooting

### Emails Still Not Sending?
1. Check Render logs: `Logs` tab in Render dashboard
2. Look for `[ERROR] SMTP Connection Error` or `[ERROR] Admin email error`
3. Verify SendGrid API key is correct (no extra spaces)
4. Verify sender email is verified in SendGrid
5. Check SendGrid Activity Feed for delivery status

### SendGrid Free Tier Limits
- 100 emails per day
- Single sender verification only
- No dedicated IP
- Basic email analytics

### Alternative: Upgrade Render
If you prefer Gmail SMTP:
1. Upgrade to Render **Starter plan** ($7/month)
2. Paid plans allow outbound SMTP connections
3. Keep Gmail SMTP settings in environment variables

## Current Status
- ✅ Code updated to support SendGrid
- ⚠️ Requires SendGrid API key in Render environment variables
- ⚠️ Requires sender email verification in SendGrid
