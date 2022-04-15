// dependency library
const express = require('express')
const router = express.Router()

// feature modules



router.use(`/health`, require('../app/modules/health/route'));
router.use(`/user`, require('../app/modules/user/route'));



module.exports = router;