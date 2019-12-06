const express = require('express')
const articles = require('./v1')

const router = express.Router()

router.use('/articles', articles)

module.exports = router
