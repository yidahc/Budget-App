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

CREATE TABLE totals (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  monthly_budget DOUBLE(16,2) DEFAULT 0.00)
  SELECT SUM(price) as Total FROM daily


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO daily(purchase, price, category) VALUES ("soap", 20, "health/beauty");
 INSERT INTO daily(purchase, price, category) VALUES ("coffee", 20, "food");
 INSERT INTO daily(purchase, price, category) VALUES ("rent", 4000, "rent/housing");
 INSERT INTO daily(purchase, price) VALUES ("notebook", 20);
