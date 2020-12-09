DROP DATABASE IF EXISTS ems_db;
CREATE DATABASE ems_db;

USE ems_db;

CREATE TABLE department (
	id INT NOT NULL,
    PRIMARY KEY (id),
    name VARCHAR(30) NOT NULL
);
    
CREATE TABLE role (
	id INT NOT NULL,
    PRIMARY KEY (id),
    title VARCHAR (30) NOT NULL,
    salary DECIMAL(15,2) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
	id INT NOT NULL,
    PRIMARY KEY (id),
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);