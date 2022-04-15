// dependency library
const mongoose = require('mongoose');
const constants = require('./constants');

const configSchema = new mongoose.Schema({
  type: { type: String, enum: constants.CONFIG, index: true },//type of notification
  body: { type: String, default: '' },//we can take any default message
  isActive: { type: Boolean, default: false },// current setting is active or not
  twilioNumber: { type: String, default: '' }// number given by twilio
}, { timestamps: true });


module.exports = mongoose.model('configs', configSchema);