const mongoose = require('mongoose')

const ModelRequest = new mongoose.Schema({
  email: { type: String, required: true },
  status: { type: Number, default: 0 },
  result: { type: Object }
}, { timestamps: true})

module.exports = mongoose.model('model_request', ModelRequest)