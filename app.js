require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { homeRoute, postsRoute } = require('./src/routes')

const app = express()

const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// MongoDB
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-nbrmo.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('\x1b[36m%s\x1b[0m', 'DB Connected!'))
  .catch(err => console.log('\x1b[31m%s\x1b[0m', `DB Connection Error: ${err.message}`))

// Middleware
app.use('/public', express.static('static'))

// Routes
app.use('/', homeRoute)
app.use('/posts', postsRoute)

app.listen(port, () => console.log('\x1b[1m%s\x1b[0m', `Listening on http://localhost:${port}/`))
