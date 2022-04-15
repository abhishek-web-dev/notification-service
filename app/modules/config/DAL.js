// feature modules
const model = require('./model');


const getOneConfig = (filter = {}, select = '') => {
  return model.findOne(filter).select(select).lean();
};


module.exports = {
  getOneConfig
};
