USE ptkk3tpv83jayqil;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	eaten BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO burgers (name, eaten) VALUES ("Whopper", FALSE);
INSERT INTO burgers (name, eaten) VALUES ("Krabby Patty", FALSE);
INSERT INTO burgers (name, eaten) VALUES ("Goodburger", FALSE);
SELECT * FROM burgers;