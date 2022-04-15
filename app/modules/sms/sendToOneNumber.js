const twilio = require('../../../lib/twilio');


// send sms to one specific number
const sendSmsToOneNumber = async (user) => {

  try {
    let response = await twilio.messages
      .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+15017122661',
        to: '+15558675310'
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