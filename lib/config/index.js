// dependency library
require('dotenv').config({ path: '.prod.env' });

module.exports = {
   port: process.env.SERVER_PORT,
   environment: process.env.PROD_ENVIRONMENT === 'false' ? 'development' : 'production',
   mongoUrl: process.env.MONGO_URL,
   twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
   twilioAuthToken: process.env.TWILIO_AUTH_TOKEN

}

















/*
// according to requirement latter use this architecture
// config/config.js
'use strict'
const common = require('./components/common')
const logger = require('./components/logger')
const redis = require('./components/redis')
const server = require('./components/server')
module.exports = Object.assign({}, common, logger, redis, server)
*/