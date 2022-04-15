// dependency library
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  type: { type: String, required: true, index: true },
  body: { type: String, default: '' },
  to: { type: String, require: true },//reciever details
  from: { type: String, require: true },//sender details

}, { timestamps: true });


module.exports = mongoose.model('notifications', notificationSchema);