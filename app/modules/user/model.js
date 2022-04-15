// dependency library
const mongoose = require('mongoose');
const constants = require('./constants');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: constants.GENDER },
  mobileNumber: { type: String, require: true },//i have assumed use will have only 1 mobile number
  subscription: { type: Boolean, default: false, index: true }
}, { timestamps: true });

//we can create compound index { "subscription": 1, "gender": 1, "age": 1 } using mongo compass

module.exports = mongoose.model('users', userSchema);