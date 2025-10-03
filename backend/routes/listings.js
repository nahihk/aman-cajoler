const express = require('express');
const auth = require('../middleware/auth');
const Listing = require('../models/Listing');
const router = express.Router();

// Get all listings
router.get('/', async (req, res) => {
  try {
    const { category, region, page = 1, limit = 10 } = req.query;
    
    let filter = { status: 'active' };
    if (category) filter.category = category;
    if (region) filter.region = region;

    const listings = await Listing.find(filter)
      .populate('createdBy', 'name phone region')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Listing.countDocuments(filter);

    res.json({
      listings,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single listing
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate('createdBy', 'name phone region');
    
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new listing
router.post('/', auth, async (req, res) => {
  try {
    const listing = new Listing({
      ...req.body,
      createdBy: req.user.id
    });

    const savedListing = await listing.save();
    await savedListing.populate('createdBy', 'name phone region');
    
    res.status(201).json(savedListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update listing
router.put('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    // Check if user owns the listing or is admin
    if (listing.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    ).populate('createdBy', 'name phone region');

    res.json(updatedListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete listing
router.delete('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    if (listing.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Listing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Listing removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
