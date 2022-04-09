const express = require('express')
const { Checkout } = require('../controllers/payController')

const router = express.Router()

//checkout 
router.post('/', Checkout)

module.exports = router