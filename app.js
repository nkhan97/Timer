// jshint esversion:6
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
const minutes = []
const seconds = []

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('timer-set')
})

app.get('/timer-set', function (req, res) {
  res.render('timer-set')
})

app.post('/timer-set', function (req, res) {
  minute = req.body.minutes
  second = req.body.seconds

  if (second < 10) {
    second = '0' + req.body.seconds
  }
  if (minute < 10) {
    minute = '0' + req.body.minutes
  }

  minutes.splice(0, minutes.length, minute)
  seconds.splice(0, seconds.length, second)
  res.redirect('/timer')
})

app.get('/timer', function (req, res) {
  res.render('timer', { minutes: minutes, seconds: seconds })
})

app.post('/timer', function (req, res) {
  res.render('timer')
})

app.listen(3000, function (req, res) {
  console.log('Server is up and running')
})
