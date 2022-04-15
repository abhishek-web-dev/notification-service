const CronJob = require('cron').CronJob;
const userDAL = require('../user/DAL');
const configDAL = require('../config/DAL');
const sms = require('../sms');
const whatsapp = require('../whatsapp');
const configConstants = require('../config/constants');


const sendSmsNotificationToOneUser = async (user, smsConfig) => {
  if (!smsConfig)
    return { success: true };

  // we can throw some error also
  if (!(user.mobileNumber.length && smsConfig.twilioNumber.length))
    return { success: true };

  const payload = {
    userNumber: user.mobileNumber,
    twilioNumber: smsConfig.twilioNumber,
    body: smsConfig.body
  };
  return await sms.sendSmsToOneNumber(payload);

}

const sendWhatsappNotificationToOneUser = async (user, whatsappConfig) => {
  if (!whatsappConfig)
    return { success: true };

  // we can throw some error also
  if (!(user.mobileNumber.length && whatsappConfig.twilioNumber.length))
    return { success: true };

  const payload = {
    userNumber: user.mobileNumber,
    twilioNumber: whatsappConfig.twilioNumber,
    body: whatsappConfig.body
  };
  return await whatsapp.sendMessageToOneNumber(payload);

}


const sendNotification = async () => {
  // get user list and notification config
  const [
    userList,
    smsConfig,
    whatsappConfig
  ] = await Promise.all([
    userDAL.getUsers({ subscription: true }),
    configDAL.getOneConfig({ type: configConstants.DAILY_SMS, isActive: true }),
    configDAL.getOneConfig({ type: configConstants.DAILY_WHATSAPP, isActive: true }),
  ]);


  if (!userList.length)//user list zero
    return;

  // send all types of notification for each users
  let result = await Promise.allSettled([
    ...(userList.map(user => sendSmsNotificationToOneUser(user, smsConfig))),
    ...(userList.map(user => sendWhatsappNotificationToOneUser(user, whatsappConfig)))
  ]);

  // TODO: schedule for faild noti.
  result.map(r => {
    console.log('result : ', r.status)
  })
}

//push notification daily at 8 AM
const dailyPushNotificatioCron = () => {
  const test1 = '0 */1 * * * *';
  const prod = '0 0 08 * * *';//every day 8 AM
  const job = new CronJob(test1, sendNotification);
  job.start();
}

module.exports = {
  dailyPushNotificatioCron
}


