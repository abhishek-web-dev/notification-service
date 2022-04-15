// feature modules
const { successResponse } = require('../../../lib/response/https/successResponse');
const { validateRequest } = require('../../../lib/request/validateRequest');
const { httpCode } = require('../../constants/http');
const service = require('./service');
const validator = require('./validator');


const sendAdHocNotification = async (request, response) => {
  validateRequest(request, validator.sendAdHocNotification);

  const result = await service.sendAdHocNotification(request.body);

  successResponse(response, httpCode.OK_REQUEST, result);
};


module.exports = {
  sendAdHocNotification
};
