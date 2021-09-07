DROP DATABASE test;
DROP TABLE users;

CREATE DATABASE test;
USE test;
CREATE TABLE users (id VARCHAR(13), password VARCHAR(100), firstName VARCHAR(10), lastName VARCHAR(10));


INSERT INTO users VALUE("pogapoga", "pogapass", "pogaman", "roid");
SELECT * FROM users;