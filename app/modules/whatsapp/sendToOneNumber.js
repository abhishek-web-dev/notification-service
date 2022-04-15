const twilio = require('../../../lib/twilio');


// send whatsapp message to one specific number
const sendSmsToOneNumber = async (user) => {

  try {
    let response = await twilio.messages
      .create({
        from: 'whatsapp:+14155238886',
        body: 'Hello there!',
        to: 'whatsapp:+15005550006'
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