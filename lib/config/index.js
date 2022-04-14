// dependency library
require('dotenv').config({ path: '.dev.env' });

module.exports = {
   port: process.env.SERVER_PORT,
   environment: process.env.PROD_ENVIRONMENT === 'false' ? 'development' : 'production',
   allowedHosts: process.env.ALLOWED_HOSTS,
   mongoUrl: process.env.MONGO_URL,
   AppywareJwtAuthTokenExpiration: process.env.APPYWARE_JWT_AUTH_TOKEN_EXPIRATION,
   AppywareSecretKey: process.env.APPYWARE_SECRET_KEY,
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