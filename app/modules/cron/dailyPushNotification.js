const CronJob = require('cron').CronJob;
const userDAL = require('../user/DAL');
const configDAL = require('../config/DAL');
const sms = require('../sms');
const whatsapp = require('../whatsapp');
const configConstants = require('../config/constants');


const sendSmsNotificationToOneUser = (user) => {
  // TODO: get user 



}

const sendWhatsappNotificationToOneUser = (user) => {
  // TODO: get user 



}


const sendNotification = async () => {
  // get user list
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
    ...(userList.map(u => sendSmsNotificationToOneUser(u))),
    ...(userList.map(u => sendWhatsappNotificationToOneUser(u)))
  ]);

  // TODO: schedule for faild noti.

}

//push notification daily at 8 AM
const dailyPushNotificatioCron = () => {
  const job = new CronJob('0 0 08 * * *', sendNotification);
  job.start();
}

module.exports = {
  dailyPushNotificatioCron
}


