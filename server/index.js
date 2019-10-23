const express = require('express');
// NodeRequire importing express module.

const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 3000;


// Creates an express application
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// static middleware method serves all files by adding to the end of this provided root directory url. 
// serving up the html (which in turn serves react components)
app.use(express.static(__dirname + '/../react-client/dist'));
// Instead of sending a 404 response, this module will call next() to move on to the next middleware

// Creating server endpoint called today, using the express 'get' method, which takes 2 parameters (string, cb) (pathName, requestHandler)
// '/today' is the path name appended to the root directory when serving this path
// getDaily method is the route the path will take (handles what happes when we make a request from the frontend)
app.get('/today', routes.getDaily);

// we are listening from the server for any get requests made to the '/totals' endpoint/path, 
// and executing the getTotals method when we receive a request at this endpoint
app.get('/totals', routes.getTotals);

// 'post' method receives the request (what you are trying to submit to the database) 
// and passes it as a parameter to execute the cb (which dissects the request and sumbits it to the db)
app.post('/daily', routes.addToDaily);

app.get('/daily', routes.getAllDaily);

app.listen(port, () => {
  console.log('listening on port 3000!');
});

module.exports = app;
