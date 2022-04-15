// dependency library
const Joi = require('joi');
const userConstants = require('../user/constants');
const constants = require('./constants');

// write all validator logic

const sendAdHocNotification = {
  body: Joi.object().keys({
    gender: Joi.valid(...userConstants.GENDER),
    subscription: Joi.boolean().required(),
    age: Joi.object().keys({ start: Joi.number().min(1), end: Joi.number().min(1) }),
    notificationType: Joi.valid(...constants.NOTIFICATION_TYPE),
    twilioNumber: Joi.string().required(),
    message: Joi.string().required()
  })
};


module.exports = {
  sendAdHocNotification
}

