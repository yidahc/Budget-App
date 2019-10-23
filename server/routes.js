const db = require('../database-mysql/index.js');
// importing db methods
/*
module.exports.getCat = (request, response) => {
  db.getCat( data => {
  response
    .status(200)
    .send(data)
    .end();
  });
};
*/

// exporting getDaily method to be used as a route for a specific endpoint
module.exports.getDaily = (request, response) => {
  // invoking getToday function imported from database
  db.getToday( data => {
  response
    .status(200)
    .send(data)
    .end();
  });
};

// routes are methods with callbacks in them. Once we receive the data, we use it in callbacks
// getTotals 
module.exports.getTotals = (request, response) => {
  // db.getTotals method returns results from database (data), which is then used in the callback below 
  db.getTotals( data => {
  response
    .status(200)
    .send(data)
    .end();
  });
};

module.exports.addToDaily = (request,response) => {
  const { purchase, price, category } = request.body;
  db.postToDaily(purchase, price, category, (result) => {
  response
    .status(201)
    .send(result)
    .end();
  })
};


module.exports.getAllDaily = (request, response) => {
  db.getAllDaily ( data => {
 response
   .status(200)
   .send(data)
   .end()
})
};
