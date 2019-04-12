const db = require('../database-mysql/index.js');

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

module.exports.getDaily = (request, response) => {
  db.getToday( data => {
  response
    .status(200)
    .send(data)
    .end();
  });
};

module.exports.getTotals = (request, response) => {
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
