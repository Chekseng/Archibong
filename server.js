require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const favicon = require('express-favicon')
const portfolioContact = require('./routes/routes')
const app = express()

const SET_URI = process.env.MONGODB_URI;

// connect to mongoose 
mongoose.connect(SET_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})

const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('the mongdb database is connected!'))

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(favicon(__dirname + '/public/assets/images/favicon.ico'))

app.use('', portfolioContact)

// set the public folder to static
app.use(express.static('public'))

// set the listening port
app.listen(8080,() => console.log('the express server is up and running'))