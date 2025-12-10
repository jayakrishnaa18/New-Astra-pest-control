# 🐛 Astra Pest Control - Professional Website

A modern, responsive website for Astra Pest Control serving Brisbane, Gold Coast, Ipswich, and Sunshine Coast areas. Built with React.js and Node.js, featuring comprehensive pest control services, SEO optimization, and professional design.

## 🌟 Features

### 🎨 **Modern Design**
- Responsive mobile-first design
- Professional color scheme (red & cream)
- Interactive phone frame video player
- Smooth animations and transitions
- Clean, user-friendly interface

### 📱 **Mobile Optimized**
- Perfect mobile responsiveness
- Touch-friendly navigation
- Optimized images and performance
- Mobile-specific layouts

### 🔍 **SEO Optimized**
- Comprehensive meta tags and structured data
- Location-specific landing pages (Brisbane, Gold Coast)
- XML sitemap and robots.txt
- Google Analytics ready
- Core Web Vitals optimized

### 📧 **Contact System**
- Professional email templates
- Quote request forms
- Automated customer confirmations
- Admin notifications

### 📝 **Content Management**
- 30+ pest control blog posts
- Service pages with detailed information
- FAQ section
- Hints & tips for customers

## 🚀 Live Demo

**Website:** [astrapestcontrol.com.au](https://astrapestcontrol.com.au)

## 📋 Services Offered

- **General Pest Control** - Cockroaches, ants, spiders, common pests
- **Termite Inspections** - Thorough inspections with detailed reports  
- **Termite Treatment** - Advanced barrier systems & baiting
- **Rodent Control** - Effective removal & prevention strategies
- **Commercial Services** - Tailored solutions for businesses

## 🛠️ Technology Stack

### **Frontend**
- **React.js** - Modern JavaScript framework
- **React Router** - Client-side routing
- **React Helmet** - SEO meta tag management
- **CSS3** - Custom styling with animations
- **Responsive Design** - Mobile-first approach

### **Backend**
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Nodemailer** - Email handling
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers

### **Deployment**
- **Vercel** - Static site hosting (recommended)
- **Render** - Full-stack hosting (alternative)
- **GitHub** - Version control and CI/CD

## 📁 Project Structure

```
astra-pest-control/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   │   ├── index.html     # Main HTML template
│   │   ├── sitemap.xml    # SEO sitemap
│   │   ├── robots.txt     # Search engine directives
│   │   └── *.jpg          # Images
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── blogContent.js # Blog post content
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── emailTemplates.js # Email templates
│   └── server.js         # Main server file
├── package.json          # Root dependencies
└── README.md            # This file
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 16+ and npm
- Git

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/astrapestcontrol/Astra-Pest-control.git
cd Astra-Pest-control
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

3. **Environment Setup**
```bash
# Copy environment template
cp .env.example .env.production

# Edit environment variables
nano .env.production
```

4. **Development Mode**
```bash
# Start both client and server
npm run dev

# Or start separately:
npm run server  # Backend only
npm run client  # Frontend only
```

5. **Production Build**
```bash
cd client
npm run build
```

## 🌐 Deployment

### **Vercel Deployment (Recommended)**

1. **Prepare for Static Deployment**
   - Use client folder only
   - Configure contact forms with external service

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy from client folder
   cd client
   vercel --prod
   ```

3. **Configuration**
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

### **Full-Stack Deployment (Render/Railway)**

1. **Environment Variables**
```env
NODE_ENV=production
PORT=10000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
CLIENT_URL=https://your-domain.com
```

2. **Build Command**
```bash
npm install && cd client && npm install && npm run build
```

3. **Start Command**
```bash
npm start
```

## 📞 Contact Information

- **Phone:** 0450 955 420
- **Email:** Astrapestcontrol.au@gmail.com
- **Service Areas:** Brisbane • Ipswich • Gold Coast • Sunshine Coast

## 🎯 SEO Features

### **Technical SEO**
- ✅ Structured data (LocalBusiness schema)
- ✅ XML sitemap with all pages
- ✅ Robots.txt optimization
- ✅ Meta tags and Open Graph
- ✅ Google Analytics integration

### **Content SEO**
- ✅ Location-specific pages
- ✅ Service-focused content
- ✅ Blog content strategy
- ✅ Local business optimization

### **Performance SEO**
- ✅ Core Web Vitals optimized
- ✅ Mobile-first design
- ✅ Fast loading times
- ✅ Image optimization

## 🔧 Customization

### **Branding**
- Update colors in CSS files
- Replace logo in `client/public/`
- Modify contact information in components

### **Content**
- Edit service descriptions in page components
- Update blog content in `blogContent.js`
- Modify FAQ entries in `FAQ.js`

### **SEO**
- Update meta tags in `index.html`
- Modify structured data for your business
- Update sitemap with your domain

## 📈 Performance Metrics

- **PageSpeed Score:** 95+ (Mobile & Desktop)
- **Core Web Vitals:** All green
- **SEO Score:** 100/100
- **Accessibility:** 95+
- **Best Practices:** 95+

## 🛡️ Security Features

- Content Security Policy (CSP) headers
- CORS configuration
- Rate limiting on contact forms
- Input validation and sanitization
- Secure email handling

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Astra Pest Control. All rights reserved.

## 🆘 Support

For technical support or questions:
- **Email:** Astrapestcontrol.au@gmail.com
- **Phone:** 0450 955 420

## 🔄 Version History

- **v2.0** - Major redesign with Brisbane & Gold Coast expansion
- **v1.5** - SEO optimization and performance improvements
- **v1.0** - Initial website launch

---

**Built with ❤️ for Astra Pest Control**

*Professional pest control services across Brisbane, Gold Coast, Ipswich, and Sunshine Coast.*
