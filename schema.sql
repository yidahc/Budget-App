DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

CREATE TABLE daily (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  purchase VARCHAR(60) NOT NULL,
  price DOUBLE(5,2),
  category VARCHAR(60) NOT NULL,
  day DATETIME DEFAULT CURRENT_TIMESTAMP
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO daily(purchase, price, category) VALUES ("lunch (breakfast burrito)", 60, "food");
 INSERT INTO daily(purchase, price, category) VALUES ("boost energy drink", 30, "food");
 INSERT INTO daily(purchase, price, category) VALUES ("soap", 20, "utilities");
 INSERT INTO daily(purchase, price, category) VALUES ("coffee", 20, "food");
