const CronJob = require('cron').CronJob;
const notificationDAL = require('../notification/DAL');
const sms = require('../sms');
const whatsapp = require('../whatsapp');
const notificationConstants = require('../notification/constants');
const notificationUtils = require('../notification/utils');


const sendSmsNotificationToOneUser = async (user) => {

  // we can throw some error also
  if (!(user.to.length && user.from.length))
    return { success: true };

  const payload = {
    userNumber: user.to,
    twilioNumber: user.from,
    body: user.body
  };
  return await sms.sendSmsToOneNumber(payload);

}

// business number has not verified. so, whatsapp messaging will not work in testing but
// once we will have WhatsApp Business Profile. this code will work.
// this whatsapp notification has disabled from config. 
const sendWhatsappNotificationToOneUser = async (user) => {

  // we can throw some error also
  if (!(user.to.length && user.from.length))
    return { success: true };

  const payload = {
    userNumber: user.to,
    twilioNumber: user.from,
    body: user.body
  };
  return await whatsapp.sendMessageToOneNumber(payload);

}


const sendNotification = async () => {
  // get faild notification list 
  const [
    smsTypeFaildNotificationList,
    whatsappTypeFaildNotificationList
  ] = await Promise.all([
    notificationDAL.getFaildNotification({ type: notificationConstants.SMS }),
    notificationDAL.getFaildNotification({ type: notificationConstants.WHATSAPP })
  ]);

  //console.log('faildNotificationList.length ', smsTypeFaildNotificationList.length, whatsappTypeFaildNotificationList.length)

  // send all types of faild notification for each users
  // just we will have to add different type of notification module
  let result = await Promise.allSettled([
    ...(smsTypeFaildNotificationList.map(user => sendSmsNotificationToOneUser(user))),
    ...(whatsappTypeFaildNotificationList.map(user => sendWhatsappNotificationToOneUser(user)))
  ]);

  // schedule for faild noti.
  let bulkDelete = [...smsTypeFaildNotificationList, ...whatsappTypeFaildNotificationList].map(ele => {
    return {
      deleteOne: {
        filter: { "_id": ele._id }
      }
    };
  });
  await Promise.allSettled([
    notificationDAL.bulkWrite(bulkDelete, { ordered: false }),
    notificationUtils.retryForFaildNotification(result.filter(r => !r.value.success))
  ]);
}

//push faild notification 
const pushFaildNotificatioCron = () => {
  console.log('Faild notification cron has started!')
  const test1 = '0 */1 * * * *';//every minutes
  const prod = '0 */10 * * * *';//every 10 minutes
  const job = new CronJob(prod, sendNotification);
  job.start();
}

module.exports = {
  pushFaildNotificatioCron
}


