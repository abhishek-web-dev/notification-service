const twilio = require('../../../lib/twilio');
const notificationConstants = require('../notification/constants');

// send sms to one specific number
const sendSmsToOneNumber = async (data) => {
  const { userNumber, twilioNumber, body } = data;
  try {
    let response = await twilio.messages
      .create({
        body: body,
        from: twilioNumber,
        to: userNumber
      });

    console.log('sms : ', response.sid, response.status)
    return { success: true };
  }
  catch (e) {
    // console.log(e);
    return { success: false, ...data, type: notificationConstants.SMS };
  }

}

module.exports = {
  sendSmsToOneNumber
}