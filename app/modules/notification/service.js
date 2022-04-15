// feature modules
const userDAL = require("../user/DAL");
// const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");


const sendAdHocNotification = async (body) => {
  const { gender, subscription, age } = body;

  // get user lists
  const userList = await userDAL.getUsers({
    subscription,
    gender,
    age: { "$gte": age.start, "$lte": age.end }
  });
  console.log('userList ', userList.length)

  //schedule all type of notification


  //send response


  //throw new AppError(ERROR_CODES.ERROR_FROM_PROXY_SERVER);

  return { message: 'Ok' }
}


module.exports = {
  sendAdHocNotification
};
