const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  venue: String,
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  registrationType: { type: String, enum: ['free', 'paid'], default: 'free' },
  customFields: [
    {
      label: { type: String, required: true },
      type: { type: String, required: true }, // e.g., "text", "select"
      required: { type: Boolean, default: false },
      options: [String] // only needed if type is "select"
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
