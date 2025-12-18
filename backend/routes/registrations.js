const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Create registration
router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    const saved = await registration.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all registrations
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
