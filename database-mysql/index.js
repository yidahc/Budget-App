var mysql = require('mysql');

//mysql://:acd2ee25@us-cdbr-iron-east-02.cleardb.net/?reconnect=true

var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-02.cleardb.net',
  user     : 'b94a8e5967d2c0',
  password : 'acd2ee25',
  database : 'heroku_4d11cf55a76c0cc'
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
//    "SELECT * FROM daily WHERE day(day) = day(curdate());", (error, results) => {
    "SELECT * FROM daily;", (error, results) => {
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
