var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '170482',
  database : 'budget'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

module.exports.getToday = cb => {
  connection.query(
    "SELECT * FROM daily WHERE day(day) = day(curdate());", (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log(results)
      cb(results);
    }
  });
};

module.exports.postToDaily = function (purchase, price, category, cb) {
  connection.query(
    "INSERT INTO daily (purchase, price, category) VALUES (?, ?, ?);",
 [purchase, price, category],
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

module.exports.getAllDaily = cb => {
  connection.query(
    "SELECT * from daily", (error, response) => {
    if (error) {
      throw (error)
    } else {
      cb (response)
    }
  }
  )
};
