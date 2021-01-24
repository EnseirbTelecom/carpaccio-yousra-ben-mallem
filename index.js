const express = require('express')

const app = express()
const router = require('./routes/route')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/', router)

module.exports = app
