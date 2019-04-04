const db = require('../database-mysql/index.js');

module.exports.getDaily = (request, response) => {
  db.getAllDaily( data => {
  response
    .status(200)
    .send(data)
    .end();
  });
};


module.exports.addToDaily = (request,response) => {
  const { purchase, price } = request.body;
  console.log("!!!!!", purchase, price, "!!!")
  db.postToDaily(purchase, price, (result) => {
  response
    .status(201)
    .send(result)
    .end();
  })
};
