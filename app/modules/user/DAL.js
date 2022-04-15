// feature modules
const model = require('./model');


const getUsers = (filter = {}, select = '') => {
  return model.find(filter).select(select).lean();
};


module.exports = {
  getUsers
};
