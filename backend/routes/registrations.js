const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const { v4: uuidv4 } = require('uuid');

// Create new registration
router.post('/', async (req, res) => {
  try {
    const qrCode = uuidv4();
    const newRegistration = new Registration({ ...req.body, qrCode });
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Get all registrations for an event
router.get('/event/:eventId', async (req, res) => {
  try {
    const registrations = await Registration.find({ eventId: req.params.eventId });
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Scan QR code to mark attendance
// Scan QR code to mark attendance
router.post('/scan', async (req, res) => {
  try {
    // Debug: log request body
    console.log('Scan request body:', req.body);

    const { qrCode } = req.body;
    if (!qrCode) return res.status(400).json({ message: 'QR code is required' });

    // Find registration by QR code
    const registration = await Registration.findOne({ qrCode });
    if (!registration) return res.status(404).json({ message: 'QR code not found' });

    // Mark as attended
    registration.attended = true;
    await registration.save();

    res.status(200).json({ message: 'Attendance recorded', registration });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
