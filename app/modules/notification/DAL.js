// feature modules
const model = require('./model');


const bulkWrite = (bulkArray, options = {}) => {
  return model.bulkWrite(bulkArray, options);
};

const getFaildNotification = (filter = {}, option = '') => {
  return model.find(filter).select(option).lean();
}

module.exports = {
  bulkWrite,
  getFaildNotification
};