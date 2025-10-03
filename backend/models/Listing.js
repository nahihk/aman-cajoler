const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['house', 'car'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  region: {
    type: String,
    required: true,
    enum: ['addis-ababa', 'tigray', 'amhara', 'oromiya', 'harari', 'gambela', 'benishangul', 'afar', 'somali']
  },
  images: [{
    type: String
  }],
  contact: {
    name: String,
    phone: String,
    email: String
  },
  features: {
    // For houses
    bedrooms: Number,
    bathrooms: Number,
    area: Number,
    // For cars
    make: String,
    model: String,
    year: Number,
    mileage: Number,
    fuelType: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'sold', 'expired'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
listingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Listing', listingSchema);
