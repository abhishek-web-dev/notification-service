
// feature modules
const { httpCode } = require('../../constants/http');

const ERROR_CODES = {
  COOKIES_NOT_AVAILABLE: 1200
};

const ERROR_INFO = {
  [ERROR_CODES.COOKIES_NOT_AVAILABLE]: {
    errorDescription: 'Cookies are not available!',
    type: 'story',
    errorUserTitle: '',
    errorUserMsg: 'Oops! please try again.',
    httpCode: httpCode.CONFLICT
  }
};

module.exports = {
  ERROR_CODES,
  ERROR_INFO
};
