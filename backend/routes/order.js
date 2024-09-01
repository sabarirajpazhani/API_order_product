const express = require('express')
const { creatOrder } = require('../controllers/orderControllers')
const router = express.Router()

router.route('/order').post(creatOrder)

module.exports = router;