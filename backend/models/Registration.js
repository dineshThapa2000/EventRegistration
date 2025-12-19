const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  customFields: [
    { label: String, value: String }
  ],
  qrCode: { type: String, unique: true },
  attended: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
