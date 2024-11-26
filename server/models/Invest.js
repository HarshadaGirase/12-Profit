const mongoose = require("mongoose");


const phoneRegex = /^[+]*[0-9]{10,15}$/;

const investmentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    match: [
      phoneRegex,
      'Please provide a valid phone number. Only numbers (with an optional "+" sign) are allowed.',
    ],
  },
  preferredPlan: { type: String },
  investmentRange: { type: String, required: true },
  investmentTime: { type: String, required: true },
  transactionalConsent: { type: Boolean, required: true },
  marketingConsent: { type: Boolean, required: true },
  dataConsent: { type: Boolean, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Investment", investmentSchema)

