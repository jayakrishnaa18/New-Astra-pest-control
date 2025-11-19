const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    required: true,
    enum: ['residential', 'commercial', 'carpet', 'endoflease']
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'contacted', 'completed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);
