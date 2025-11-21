# Astra Pest Control Website

Professional cleaning and pest control services website built with React and Node.js.

## Deployment to Render

### Step 1: Prepare Your Repository
1. Ensure all changes are committed and pushed to GitHub
2. Make sure the `v2` branch is up to date

### Step 2: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account

### Step 3: Deploy Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `jayakrishnaa18/New-Astra-pest-control`
3. Select the `v2` branch
4. Configure the service:
   - **Name**: astra-pest-control
   - **Region**: Oregon (US West)
   - **Branch**: v2
   - **Root Directory**: (leave empty)
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Step 4: Add Environment Variables
In the Render dashboard, add these environment variables:

```
NODE_ENV=production
PORT=10000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_TO=info@best1cleaning.com
CLIENT_URL=https://your-app-name.onrender.com
```

### Step 5: Deploy
1. Click "Create Web Service"
2. Wait for the build to complete (5-10 minutes)
3. Your site will be live at: `https://your-app-name.onrender.com`

## Environment Variables Explained

- **NODE_ENV**: Set to `production` for deployment
- **PORT**: Render uses port 10000 by default
- **SMTP_HOST**: Your email provider's SMTP server
- **SMTP_PORT**: Usually 587 for TLS
- **SMTP_USER**: Email address for sending
- **SMTP_PASS**: App password (not regular password)
- **EMAIL_TO**: Where contact form submissions go
- **CLIENT_URL**: Your Render app URL (update after first deploy)

## Getting Gmail App Password

1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App Passwords
4. Generate a new app password for "Mail"
5. Use this password in SMTP_PASS

## Local Development

```bash
# Install dependencies
npm run install-all

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Deployment**: Render

## Features

- Responsive design (320px - desktop)
- Contact form with email notifications
- Service pages for cleaning and pest control
- Blog with pest control guides
- FAQ section
- Professional UI/UX

## Support

For issues or questions, contact: info@best1cleaning.com
