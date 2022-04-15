const CronJob = require('cron').CronJob;
const userDAL = require('../user/DAL');
const configDAL = require('../config/DAL');
const sms = require('../sms');
const whatsapp = require('../whatsapp');
const configConstants = require('../config/constants');
const notificationUtils = require('../notification/utils');


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

// business number has not verified. so, whatsapp messaging will not work in testing but
// once we will have WhatsApp Business Profile. this code will work.
// this whatsapp notification has disabled from config. 
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

  // console.log('userList.length ', userList.length)
  if (!userList.length)//user list zero
    return;

  // send all types of notification for each users
  // just we will have to add different type of notification module
  let result = await Promise.allSettled([
    ...(userList.map(user => sendSmsNotificationToOneUser(user, smsConfig))),
    ...(userList.map(user => sendWhatsappNotificationToOneUser(user, whatsappConfig)))
  ]);

  // schedule for faild noti.
  await notificationUtils.retryForFaildNotification(result.filter(r => !r.value.success));
}

//push notification daily at 8 AM
const dailyPushNotificatioCron = () => {
  console.log('Cron has started!')
  const test1 = '0 */1 * * * *';//every minutes
  const prod = '0 0 08 * * *';//every day 8 AM
  const job = new CronJob(prod, sendNotification);
  job.start();
}

module.exports = {
  dailyPushNotificatioCron
}


