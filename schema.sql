DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

CREATE TABLE daily (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  purchase VARCHAR(60) NOT NULL,
  price INT NOT NULL,
  day DATETIME DEFAULT CURRENT_TIMESTAMP,
  category ENUM("utilities", "food", "education", "rent/housing", "health/beauty", "savings", "debt", "transportation", "entertainment", "miscellaneous") DEFAULT "utilities"
);

/* 
Create a categories table and add default categories
type: UDF or standard
limit: limit per category (optional)
total: total so far for this month (trigerred everytime a new entry is made for this type of category?)
*/
/*
CREATE TABLE monthlyTotals (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  limit INT NOT NULL,
 // grandTotal INT NOT NULL (SELECT SUM(price) from daily),
  Add grand total for each month
  Add totals per category for each month. (Array)
  Create trigger that adds new totals each time the month changes
);
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

/*
 INSERT INTO daily(purchase, price, category) VALUES ("soap", 20, "health/beauty");
 INSERT INTO daily(purchase, price, category) VALUES ("coffee", 20, "food");
 INSERT INTO daily(purchase, price, category) VALUES ("rent", 4000, "rent/housing");
 INSERT INTO daily(purchase, price) VALUES ("notebook", 20);
*/