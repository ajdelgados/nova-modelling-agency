const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true,  unique: true },
  password: {type: String, required: true},
  is_active: { type: Boolean, default: true },
  user_role: { type: String, default: "admin" }
}, { timestamps: true})

module.exports = mongoose.model('user', User)