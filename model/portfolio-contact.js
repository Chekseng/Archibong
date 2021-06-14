const mongoose = require('mongoose')

// PORTFOLIO-CONTACT FORM SCHEMA MODEL
const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  }
})

module.exports = mongoose.model('portfolio-contact', portfolioSchema)