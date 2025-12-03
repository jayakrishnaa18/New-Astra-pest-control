# Astra Pest Control - Project Setup Guide

**Last Updated:** November 20, 2024

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm 6+ installed
- Terminal/Command Prompt access

---

## 📦 Installation

### Step 1: Install Dependencies

```bash
# Navigate to project root
cd /home/kalikijk/webtask

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

---

## 🏃 Running the Project

### Option 1: Run Both Servers Separately (Recommended for Development)

#### Terminal 1 - Start Backend Server:
```bash
cd /home/kalikijk/webtask
node server/server-demo.js
```
You should see:
```
🚀 Best 1 Cleaning Server running on port 5000
📧 Email configured: jkaliki@gitam.in
📬 Admin email: jkaliki@gitam.in
🌐 CORS enabled for: http://localhost:3000
```

#### Terminal 2 - Start React Frontend:
```bash
cd /home/kalikijk/webtask/client
npm start
```
You should see:
```
Compiled successfully!
You can now view best1-cleaning-client in the browser.
  http://localhost:3000
```

### Option 2: Run Both with One Command

```bash
cd /home/kalikijk/webtask
npm run dev
```

---

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

---

## 🛑 Stopping the Servers

### If running in terminals:
- Press `Ctrl + C` in each terminal

### If running in background:
```bash
# Kill backend
pkill -f "server-demo.js"

# Kill frontend
pkill -f "react-scripts"
```

---

## 🔧 Environment Configuration

### Backend Environment Variables (.env)
Located at: `/home/kalikijk/webtask/.env`

```env
# Server
PORT=5000
NODE_ENV=development

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM="Astra Pest Control <no-reply@astrapest.com.au>"
MAIL_TO=admin@yourdomain.com

# Site Configuration
SITE_NAME=Astra Pest Control
SITE_URL=http://localhost:3000
CLIENT_URL=http://localhost:3000
```

---

## 📝 Available Scripts

### Backend Scripts
```bash
# Start development server
node server/server-demo.js

# Start production server
NODE_ENV=production node server/server.js
```

### Frontend Scripts
```bash
cd client

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Combined Scripts (from root)
```bash
# Run both servers concurrently
npm run dev

# Build frontend
npm run build

# Start production
npm start
```

---

## 🐛 Troubleshooting

### Port Already in Use

**Backend (Port 5000):**
```bash
# Find process using port 5000
lsof -ti:5000

# Kill the process
kill -9 $(lsof -ti:5000)
```

**Frontend (Port 3000):**
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)
```

### Form Not Submitting

1. **Check backend is running:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Should return: `{"status":"ok","timestamp":"..."}`

2. **Check email configuration:**
   - Verify SMTP credentials in `.env`
   - For Gmail, use App Password (not regular password)

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for failed requests

### Module Not Found Errors

```bash
# Reinstall dependencies
cd /home/kalikijk/webtask
rm -rf node_modules package-lock.json
npm install

cd client
rm -rf node_modules package-lock.json
npm install
```

### React Won't Start

```bash
# Clear cache and restart
cd /home/kalikijk/webtask/client
rm -rf node_modules/.cache
npm start
```

---

## 📂 Project Structure

```
webtask/
├── client/                 # React frontend
│   ├── public/            # Static files
│   │   ├── index.html     # Main HTML (SEO optimized)
│   │   ├── robots.txt     # SEO robots file
│   │   ├── sitemap.xml    # SEO sitemap
│   │   └── manifest.json  # PWA manifest
│   ├── src/               # React source code
│   │   ├── components/    # Reusable components
│   │   │   ├── StickyCTA.js        # Sticky call-to-action bar
│   │   │   └── ScrollToTopButton.js # Floating scroll button
│   │   ├── pages/         # Page components
│   │   │   ├── HintsTips.js        # Timeline design with animations
│   │   │   └── About.js            # About page with values grid
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
│
├── server/                # Backend server
│   ├── server.js          # Production server
│   ├── server-demo.js     # Development server
│   └── emailTemplates.js  # Email templates
│
├── .env                   # Environment variables
├── package.json           # Backend dependencies
├── SETUP.md              # This file
├── DEPLOYMENT.md         # Deployment guide
└── SEO-GUIDE.md          # SEO documentation
```

## 🎨 Recent UI/UX Features

### Implemented Components
- **Timeline Design**: Scroll-animated timeline on Hints & Tips page
- **Sticky CTA Bar**: Appears after 600px scroll with Call Now and Quote buttons
- **Scroll to Top Button**: Floating button appears after 400px scroll
- **Glass-morphism Cards**: Transparent video feature cards with backdrop blur
- **Smooth Scrolling**: Site-wide smooth scroll behavior
- **Responsive Grid**: Fixed 4-column values grid on About page

---

## 🔑 Important Files

### Configuration Files
- `.env` - Environment variables (DO NOT commit to git)
- `client/package.json` - Frontend dependencies & scripts
- `package.json` - Backend dependencies & scripts

### Entry Points
- `server/server-demo.js` - Backend development server
- `client/src/index.js` - Frontend entry point

### Email Templates
- `server/emailTemplates.js` - Professional email designs

---

## 📧 Email Setup (Gmail)

1. **Enable 2-Factor Authentication** on your Gmail account

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password

3. **Update .env file:**
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   MAIL_TO=admin-email@gmail.com
   ```

---

## 🎨 Development Workflow

1. **Start both servers** (see Running the Project above)
2. **Make changes** to code
3. **Frontend auto-reloads** on save
4. **Backend requires restart** after changes
5. **Test in browser** at http://localhost:3000

---

## 🚀 Building for Production

```bash
# Build React app
cd /home/kalikijk/webtask/client
npm run build

# The build folder is ready to deploy
# Files will be in: client/build/
```

---

## 📞 Support

For issues or questions:
- Check logs: `tail -f /home/kalikijk/webtask/server.log`
- Check React logs in terminal
- Review browser console (F12)

---

## ✅ Checklist

Before starting development:
- [ ] Node.js installed
- [ ] Dependencies installed (`npm install` in root and client)
- [ ] `.env` file configured
- [ ] Email credentials set up
- [ ] Both servers can start without errors
- [ ] Can access http://localhost:3000
- [ ] Form submission works

---

## 🎯 Quick Commands Reference

```bash
# Start everything
cd /home/kalikijk/webtask
npm run dev

# Or manually:
# Terminal 1:
node server/server-demo.js

# Terminal 2:
cd client && npm start

# Stop everything:
pkill -f "server-demo.js" && pkill -f "react-scripts"

# Check if running:
curl http://localhost:5000/api/health
curl http://localhost:3000

# View logs:
tail -f server.log
```

---

**Happy Coding! 🎉**
