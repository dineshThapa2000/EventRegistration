const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create new event 
router.post('/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
