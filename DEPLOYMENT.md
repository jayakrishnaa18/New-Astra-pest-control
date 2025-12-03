# Astra Pest Control - Deployment Guide

**Last Updated:** November 20, 2024

## 🚀 Production Deployment

### Prerequisites
- Node.js 14+ and npm 6+
- Domain name configured
- SSL certificate (Let's Encrypt recommended)

### Step 1: Build the React App
```bash
cd /home/kalikijk/webtask
npm run build
```

### Step 2: Configure Environment Variables
Update `.env.production` with your production values:
- `SITE_URL`: Your domain (e.g., https://astrapest.com.au)
- `CLIENT_URL`: Same as SITE_URL
- Email credentials (SMTP_USER, SMTP_PASS)

### Step 3: Start Production Server
```bash
NODE_ENV=production npm start
```

Or use PM2 for process management:
```bash
npm install -g pm2
pm2 start server/server.js --name astra-pest-control
pm2 save
pm2 startup
```

### Step 4: Configure Nginx (Recommended)
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 5: SSL Certificate (Let's Encrypt)
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 📦 What's Included

### Production Features
✅ Optimized React build
✅ Email functionality with professional templates
✅ Security headers (Helmet)
✅ Compression enabled
✅ Rate limiting
✅ CORS configured
✅ Error handling
✅ Health check endpoint

### File Structure
```
webtask/
├── client/
│   ├── build/          # Production build (after npm run build)
│   ├── public/         # Static assets
│   └── src/            # React source code
├── server/
│   └── server.js       # Production server
├── .env.production     # Production environment variables
└── package.json        # Main package file
```

## 🔧 Environment Variables

Required in `.env.production`:
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Set to "production"
- `SMTP_HOST`: Email server host
- `SMTP_PORT`: Email server port
- `SMTP_USER`: Email username
- `SMTP_PASS`: Email password
- `MAIL_FROM`: Sender email
- `MAIL_TO`: Admin email for notifications
- `SITE_URL`: Your production domain
- `CLIENT_URL`: Your production domain

## 📊 Monitoring

### Health Check
```bash
curl https://yourdomain.com/api/health
```

### PM2 Monitoring
```bash
pm2 status
pm2 logs astra-pest-control
pm2 monit
```

## 🔒 Security Checklist

- [x] Helmet security headers enabled
- [x] Rate limiting configured
- [x] CORS properly set
- [x] Environment variables secured
- [x] SSL certificate installed
- [ ] Firewall configured
- [ ] Regular backups scheduled

## 📱 Testing

1. Test form submission
2. Verify email delivery
3. Check all page routes
4. Test mobile responsiveness
5. Verify SSL certificate
6. Test contact form

## 🆘 Troubleshooting

### Form not working
- Check server logs: `pm2 logs`
- Verify email credentials
- Check CORS settings

### Server not starting
- Check port availability: `lsof -i :5000`
- Verify Node.js version: `node -v`
- Check environment variables

### Email not sending
- Verify SMTP credentials
- Check Gmail "Less secure apps" setting
- Review server logs

## 📞 Support

For deployment issues, contact: jkaliki@gitam.in
