DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

CREATE TABLE daily (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  purchase VARCHAR(60) NOT NULL,
  price FLOAT(5,2)
);

/*  Execute this file from the command line by typing:
 *    mysql -u student -p < server/schema.sql
 *  to create the database and the tables.*/


 INSERT INTO daily(purchase, price) VALUES ("lunch (breakfast burrito)", 60);
 INSERT INTO daily(purchase, price) VALUES ("boost energy drink", 30);
