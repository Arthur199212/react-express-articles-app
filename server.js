require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./app/routes/api')

const app = express()

const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Access-Token, XKey, Authorization')
  next()
})

// MongoDB
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-nbrmo.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('\x1b[36m%s\x1b[0m', 'DB Connected!'))
  .catch(err => console.log('\x1b[31m%s\x1b[0m', `DB Connection Error: ${err.message}`))

// Routes
app.use('/v1', api)

app.listen(port, () => console.log('\x1b[1m%s\x1b[0m', `Listening on http://localhost:${port}/`))
