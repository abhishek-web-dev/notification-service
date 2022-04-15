const DAL = require('./DAL');


const retryForFaildNotification = async (result) => {
  // console.log('faild notifi. has called ', result.length)
  if (!result.length)
    return;

  let bulkArray = result.map(r => {
    return {
      insertOne: {
        document: {
          type: r.value.type,//notification type
          body: r.value.body,
          to: r.value.userNumber,//reciever details
          from: r.value.twilioNumber//sender details
        }
      }
    }
  });

  await DAL.bulkWrite(bulkArray, { ordered: false });

}

module.exports = {
  retryForFaildNotification
}