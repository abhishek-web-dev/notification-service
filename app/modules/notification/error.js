
// feature modules
const { httpCode } = require('../../constants/http');

const ERROR_CODES = {
  INVALID_AGE_IN_NOTIFICATION: 1400
};

const ERROR_INFO = {
  [ERROR_CODES.INVALID_AGE_IN_NOTIFICATION]: {
    errorDescription: 'Please enter valid age limit!',
    type: 'notification',
    errorUserTitle: '',
    errorUserMsg: 'Oops! invalid parameter.',
    httpCode: httpCode.BAD_REQUEST
  }
};

module.exports = {
  ERROR_CODES,
  ERROR_INFO
};
