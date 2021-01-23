const express = require('express')
const router = express.Router()
const utils = require('../functions/utils')

router.get('/id/:name', (req, res, next) => {
  res.status(200).json({ id: utils.idRepo(req.params.name) })
})

router.post('/bill', (req, res, next) => {
  res.status(200).json({ total: utils.price(req.body.quantities, req.body.prices, req.body.country, req.body.discount) })
})

module.exports = router
