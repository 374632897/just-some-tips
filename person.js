var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var dbURL = 'mongodb://localhost/person';

mongoose.connect(dbURL);
var db = mongoose.connection;

app.set('views', './views');
app.set('view engine', 'jade');

app.listen(port);
console.log('the server is running');
db.on('error', function (err) {
  console.log(err);
});
db.on('open', function () {
  console.log('db is opened');
});
