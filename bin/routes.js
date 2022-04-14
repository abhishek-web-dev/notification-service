// dependency library
const express = require('express')
const router = express.Router()

// feature modules
const { verifyAuthToken } = require('../lib/middlewares/isAuthenticated')


router.use(`/health`, require('../app/modules/health/route'));
router.use(`/user`, require('../app/modules/user/route'));



module.exports = router;