const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    banner: String, // image URL
    venue: String,
    startTime: Date,
    endTime: Date,
    registrationType: { type: String, enum: ['free','paid'], default: 'free' },
    customFields: [{ label: String, type: String }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
