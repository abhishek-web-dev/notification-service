const twilio = require('../../../lib/twilio');
const notificationConstants = require('../notification/constants');

// send whatsapp message to one specific number
const sendMessageToOneNumber = async (data) => {
  const { userNumber, twilioNumber, body } = data;
  try {
    let response = await twilio.messages
      .create({
        from: `whatsapp:${twilioNumber}`,
        body: body,
        to: `whatsapp:${userNumber}`
      });

    console.log('whatsapp : ', response.sid, response.status)
    return { success: true };
  }
  catch (e) {
    // console.log(e);
    return { success: false, ...data, type: notificationConstants.WHATSAPP };
  }

}

module.exports = {
  sendMessageToOneNumber
}