create database  if not exists companydb 

use companydb;

create table employee (
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salary int(5) default null,
    primary key (id)
)

insert into employee values 
    (1, "John", 10000),
    (2, "Bob", 20000),
    (3, "Adam", 30000),
    (4, "Eve", 40000),
    (5, "Alice", 50000);