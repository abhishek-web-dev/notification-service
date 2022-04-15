// dependency library
const router = require('express').Router();

// feature modules
const controller = require('./controller');
const asyncExecute = require('../../../lib/middlewares/asyncExecute');


router.post('/', asyncExecute(controller.sendAdHocNotification));
/**
 * @apiGroup NOTIFICATION 
 * @apiVersion  1.0.0
 * @apiDescription API to send ad hoc notification for whatsapp, sms, slack.
 * @api {post} /notification/ send ad hoc notification
 *
 *@apiBody {String="male","female","others"} gender Send user gender as a body parameter
 *@apiBody {Boolean} subscription Send subscription as a body parameter
 *@apiBody {Object} age Send user age object as a body parameter
 *@apiBody {String="sms","slack","whatsapp"} notificationType Send notificationType as a body parameter
 *@apiBody {String="+19893737496"} twilioNumber Send twilioNumber as a body parameter
 *@apiBody {String} message Send message as a body parameter
 *
 *@apiParamExample {json} Request-Body-Example:
 *     {
 *       "gender": "male",
 *       "subscription": true,
 *       "age": {"start":1, "end":30},
 *       "notificationType": "sms",
 *       "twilioNumber": "+918735474527",
 *       "message": "Sms testing message!"
 *     }
 * 
 *@apiSuccessExample {json} Success-Response: status - 200
  {
      "statusCode": 200,
      "result": {
          "message": "Ok"
      }
  }
  @apiErrorExample {json} Error-Response: status - 500
  {
      "statusCode": 400,
      "error": {
          "errorDescription": "Please enter valid age limit!",
          "type": "notification",
          "errorUserTitle": "",
          "errorUserMsg": "Oops! invalid parameter."
      }
  }
*/


module.exports = router;