// dependency library
const express = require('express')
const router = express.Router()


router.use(`/health`, require('../app/modules/health/route'));
router.use(`/notification`, require('../app/modules/notification/route'));

module.exports = router;