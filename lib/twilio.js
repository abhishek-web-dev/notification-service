const config = require('./config');

module.exports = require('twilio')(config.twilioAccountSid, config.twilioAuthToken);
