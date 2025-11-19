# Best1 Cleaning - MERN Stack Website

A modern, SEO-optimized cleaning services website built with the MERN stack, inspired by Allure Pest Control's design.

## Features

### SEO Optimization
- React Helmet for dynamic meta tags
- Structured data (JSON-LD) for local business
- Sitemap.xml generation
- Robots.txt
- Semantic HTML structure
- Fast loading with code splitting
- Mobile-responsive design

### Modern Design
- Clean, professional UI inspired by Allure Pest
- Smooth animations and transitions
- Mobile-first responsive design
- Modern color scheme and typography
- Interactive components

### Functionality
- Quote request form with email notifications
- Services API with dynamic content
- Contact form with validation
- MongoDB integration
- Express.js backend with security middleware

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. **Clone and setup:**
```bash
cd webtask
npm install
cd client && npm install
cd ..
```

2. **Environment Configuration:**
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

3. **Start MongoDB:**
```bash
# Make sure MongoDB is running on your system
mongod
```

4. **Run the application:**
```bash
# Development mode (runs both server and client)
npm run dev

# Or run separately:
npm run server  # Backend only
npm run client  # Frontend only
```

5. **Build for production:**
```bash
npm run build
npm start
```

## Project Structure

```
webtask/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── utils/          # Utility functions
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── config/             # Configuration files
└── package.json
```

## SEO Features Implemented

1. **Meta Tags:** Dynamic title, description, keywords for each page
2. **Structured Data:** Local business schema markup
3. **Open Graph:** Social media sharing optimization
4. **Sitemap:** Auto-generated XML sitemap
5. **Performance:** Compression, caching headers
6. **Security:** Helmet.js security headers
7. **Mobile:** Responsive design with proper viewport

## API Endpoints

- `POST /api/quotes` - Submit quote request
- `GET /api/services` - Get all services
- `GET /sitemap.xml` - SEO sitemap
- `GET /robots.txt` - Search engine instructions

## Deployment

The app is production-ready and can be deployed to:
- Heroku
- Vercel
- AWS
- DigitalOcean
- Any Node.js hosting platform

Make sure to set environment variables in your hosting platform.

## License

MIT License
