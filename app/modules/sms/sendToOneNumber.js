const twilio = require('../../../lib/twilio');


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

    console.log(response.sid, response.status)
    return { success: true };
  }
  catch (e) {
    console.log(e);
    return { success: false, user };
  }

}

module.exports = {
  sendSmsToOneNumber
}