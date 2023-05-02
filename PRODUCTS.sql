CREATE DATABASE PRODUCTS;
USE PRODUCTS;

CREATE TABLE HOODIES (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE PANTS (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE SHORTS (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE SHOES (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE CAPS (
    id INT NOT NULL AUTO_INCREMENT,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Sponkywhite10';
FLUSH PRIVILEGES;

INSERT INTO HOODIES (size, color, quantity, description)
VALUES
("S", "black", 5, "Black Hoodie with white logo"),
("M", "white", 3, "White Hoodie with black logo"),
("L", "blue", 4, "Blue Hoodie with red logo"),
("XL", "green", 2, "Green Hoodie with yellow logo");

INSERT INTO PANTS (size, color, quantity, description)
VALUES
("S", "black", 5, "Black Pants with white stripes"),
("M", "gray", 3, "Gray Pants with black stripes"),
("L", "brown", 4, "Brown Pants with green stripes"),
("XL", "navy", 2, "Navy Pants with red stripes");

INSERT INTO SHORTS (size, color, quantity, description)
VALUES
("S", "black", 5, "Black Shorts with white stripes"),
("M", "gray", 3, "Gray Shorts with black stripes"),
("L", "brown", 4, "Brown Shorts with green stripes"),
("XL", "navy", 2, "Navy Shorts with red stripes");

INSERT INTO SHOES (size, color, quantity, description)
VALUES
("S", "black", 5, "Black Shoes with white stripes"),
("M", "gray", 3, "Gray Shoes with black stripes"),
("L", "brown", 4, "Brown Shoes with green stripes"),
("XL", "navy", 2, "Navy Shoes with red stripes");

INSERT INTO CAPS (size, color, quantity, description)
VALUES
("S", "black", 5, "Black Cap with white logo"),
("M", "gray", 3, "Gray Cap with black logo"),
("L", "brown", 4, "Brown Cap with green logo"),
("XL", "navy", 2, "Navy Cap with red logo");

GRANT DELETE ON database_name.* TO 'root'@'localhost';
GRANT UPDATE ON database_name.* TO 'root'@'localhost';
