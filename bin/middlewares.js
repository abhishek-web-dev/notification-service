// dependency library
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// feature modules
const config = require('./../lib/config');


module.exports = (app) => {

    // serving apidoc to client
    // if (config.environment === 'development') {
    app.use('/apidoc', express.static('lib/apidoc'));
    // }

    app.use(cors());
    app.use(helmet());
    app.use(require('morgan')('dev'));//for request logs 
    app.use(express.urlencoded({ extended: false }));//parse req
    app.use(express.json({ limit: "50mb" }));//parse req
    // app.use(require('../lib/middlewares/httpJwtAuthentication').httpJwtAuthentication);//authenticate middleware
    app.use(`/`, require('./routes'));// import all routes
    app.use(require('../lib/middlewares/routeNotFound'));
    app.use(require('../lib/middlewares/errorHandler'));//global error handler
}