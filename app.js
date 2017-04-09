var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portofolio');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

var index = require('./routes/index');
var user = require('./routes/user');
var skill = require('./routes/skill');

app.use('/', index);
app.use('/user', user);
app.use('/skill', skill);

// app.use('/', (req, res, next) => {
// 	res.send('connect');
// })

app.listen(3000);

module.exports = app;