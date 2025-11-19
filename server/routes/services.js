const express = require('express');
const router = express.Router();

// GET /api/services - Get all services
router.get('/', (req, res) => {
  const services = [
    {
      id: 'residential',
      title: 'Residential Cleaning',
      description: 'Professional house cleaning services for homes and apartments',
      features: ['Regular cleaning', 'Deep cleaning', 'Move-in/out cleaning'],
      price: 'From $80'
    },
    {
      id: 'commercial',
      title: 'Commercial Cleaning',
      description: 'Office and commercial space cleaning services',
      features: ['Daily office cleaning', 'Retail space cleaning', 'Medical facilities'],
      price: 'Custom quote'
    },
    {
      id: 'carpet',
      title: 'Carpet Cleaning',
      description: 'Professional carpet and upholstery cleaning',
      features: ['Steam cleaning', 'Stain removal', 'Upholstery cleaning'],
      price: 'From $120'
    },
    {
      id: 'endoflease',
      title: 'End of Lease Cleaning',
      description: 'Bond cleaning to get your full deposit back',
      features: ['Bond back guarantee', 'Comprehensive cleaning', 'Real estate approved'],
      price: 'From $200'
    }
  ];

  res.json({
    success: true,
    services
  });
});

module.exports = router;
