const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/today', routes.getDaily);

app.get('/totals', routes.getTotals);

app.post('/daily', routes.addToDaily);

app.get('/daily', routes.getAllDaily);

module.exports = app;
