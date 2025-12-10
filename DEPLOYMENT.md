# Astra Pest Control - Render Deployment Guide

## Prerequisites
- GitHub repository: `jayakrishnaa18/New-Astra-pest-control`
- Branch: `Redesign-V2.0`
- Render account

## Deployment Steps

### 1. Push Latest Changes to GitHub
```bash
git add .
git commit -m "Ready for production deployment"
git push origin Redesign-V2.0
```

### 2. Create New Web Service on Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `jayakrishnaa18/New-Astra-pest-control`
4. Select branch: `Redesign-V2.0`

### 3. Configure Web Service

**Basic Settings:**
- Name: `astra-pest-control-richlands`
- Region: `Oregon (US West)`
- Branch: `Redesign-V2.0`
- Root Directory: (leave empty)
- Environment: `Node`
- Build Command: `npm install && cd client && npm install && npm run build`
- Start Command: `npm start`
- Plan: `Free` (or Starter for custom domain)

### 4. Add Environment Variables

Click "Advanced" → "Add Environment Variable" and add these:

```
NODE_ENV=production
PORT=10000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
MAIL_FROM=Astra Pest Control <no-reply@astrapest.com.au>
CLIENT_URL=https://astra-pest-control-richlands.onrender.com
SITE_NAME=Astra Pest Control
SITE_URL=https://astra-pest-control-richlands.onrender.com
```

**Important:** Replace `CLIENT_URL` and `SITE_URL` with your actual Render URL after deployment.

### 5. Deploy

1. Click "Create Web Service"
2. Wait for build to complete (5-10 minutes)
3. Your site will be live at: `https://astra-pest-control-richlands.onrender.com`

### 6. Post-Deployment

1. **Update Environment Variables:**
   - Go to your service → Environment
   - Update `CLIENT_URL` with your actual Render URL
   - Update `SITE_URL` with your actual Render URL

2. **Test the Website:**
   - Homepage loads correctly
   - All pages accessible
   - Contact form works
   - Emails are being sent

3. **Custom Domain (Optional):**
   - Go to Settings → Custom Domain
   - Add your domain: `www.astrapest.com.au`
   - Update DNS records as instructed
   - Update `CLIENT_URL` and `SITE_URL` to your custom domain

### 7. Update SEO for Production

After deployment, update these files with your production URL:

**client/public/index.html:**
- Update all `https://www.astrapest.com.au/` URLs to your Render URL
- Update sitemap URL

**client/public/sitemap.xml:**
- Replace all URLs with your production domain

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Verify Node version compatibility

### Emails Not Sending
- Check SMTP credentials in environment variables
- Verify Gmail "Less secure app access" or use App Password
- Check server logs for email errors

### 404 Errors
- Ensure server.js serves static files correctly
- Check that build folder exists
- Verify all routes are configured

### Form Not Working
- Check backend is running on correct port
- Verify CORS settings allow your domain
- Check browser console for errors

## Monitoring

- **Logs:** Render Dashboard → Logs
- **Metrics:** Render Dashboard → Metrics
- **Health Check:** `https://your-url.onrender.com/api/health`

## Free Tier Limitations

- Service spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free (enough for one service)
- Upgrade to Starter ($7/month) for:
  - Always-on service
  - Custom domain
  - Better performance

## Support

- Render Docs: https://render.com/docs
- Email: your-support-email@domain.com
