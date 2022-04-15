// dependency library
const mongoose = require('mongoose');
const constants = require('./constants');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: constants.GENDER },
  mobileNumber: { type: String, require: true },
  subscription: { type: Boolean, default: false }
}, { timestamps: true });


module.exports = mongoose.model('users', userSchema);