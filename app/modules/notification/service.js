// feature modules
const userDAL = require("../user/DAL");
const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");
const constants = require('./constants');
const sms = require('../sms');
const utils = require('./utils');


const sendAdHocNotification = async (body) => {
  //I am assuming here twilioNumber and message will be valid input.
  const { gender, subscription, age, notificationType, twilioNumber, message } = body;
  let result;

  //validate age limit
  if (age.start > age.end)
    throw new AppError(ERROR_CODES.INVALID_AGE_IN_NOTIFICATION);

  // get user lists
  const userList = await userDAL.getUsers({
    subscription,
    gender,
    age: { "$gte": age.start, "$lte": age.end }
  });
  // console.log('userList ', userList.length)

  if (!userList.length)
    return { message: 'Ok' }

  //schedule all type of notification
  if (notificationType === constants.SMS) {
    //only sms notification has implemented
    result = await Promise.allSettled(userList.map(user => sms.sendSmsToOneNumber({
      userNumber: user.mobileNumber,
      twilioNumber,
      body: message
    })));
  }
  else if (notificationType === constants.WHATSAPP) {
    // write logic to send whatsapp notification
    result = [];
  }
  else if (notificationType === constants.SLACK) {
    // write logic to send slack notification
    result = [];
  }

  // schedule for faild noti.
  await utils.retryForFaildNotification(result.filter(r => !r.value.success));

  //send response
  return { message: 'Ok' }
}


module.exports = {
  sendAdHocNotification
};
