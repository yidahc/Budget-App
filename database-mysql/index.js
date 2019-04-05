var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Holacode1',
  database : 'budget'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports.getAllDaily = cb => {
  connection.query(
    "SELECT * FROM daily", (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results)
      cb(results);
    }
  });
};

module.exports.postToDaily = function (purchase, price, cb) {
console.log(purchase, price)
  connection.query(
    "INSERT INTO daily (purchase, price) VALUES (?, ?);",
 [purchase, price],
  (error, results) => {
    if (error) {
      cb(error);
  } else {
    cb(results);
  }
  }
  )
};

module.exports.getTotals = cb => {
  connection.query(
    "SELECT SUM(price) as Total FROM daily", (error, results) => {
      if (error) {
        throw(error);
    } else {
      console.log(results)
      cb(results);
    }
    }
    )
  };
