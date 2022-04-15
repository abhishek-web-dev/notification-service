// dependency library
const router = require('express').Router();

// feature modules
const controller = require('./controller');
const asyncExecute = require('../../../lib/middlewares/asyncExecute');


router.post('/', asyncExecute(controller.sendAdHocNotification));
/**
 * @apiGroup NOTIFICATION 
 * @apiVersion  1.0.0
 * @apiDescription API to get user instagram stories.
 * @api {get} /story/:userId get user stories
 *
 *@apiParam {String} userId Send user insta id as a path variable
 *
 *
 *@apiSuccessExample {json} Success-Response: status - 200
    {
        "statusCode": 200,
        "result": 
            
             
    }
  @apiErrorExample {json} Error-Response: status - 500
    {
        "statusCode": 400,
        "error": {
            "errorDescription": "Invalid body in request",
            "type": "",
            "errorUserTitle": "",
            "errorUserMsg": "Bad Request"
        }
    }
*/


module.exports = router;