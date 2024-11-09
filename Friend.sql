show databases;
create database demo_amwd;

use demo_amwd;
show tables;

create table student (
    id int,
    name varchar(255),
    age int,
    address varchar(255)
);

desc student;

insert into student (id, name, age, address) values (1, 'Thushan', 54, 'Aluthgama');
select * from student;

drop table student;

create table student (
    id int,
    name varchar(255),
    age int,
    address varchar(255),
    primary key(id)
);

insert into student (id, name, age, address) values (1, 'Thushan', 54, 'Aluthgama');

select * from student where address='wadduwa';
update student set id=7 name='Jeewantha', age=89, address='Horana' where id=1;
delete from student where id=5;

select * from student where name like '%a%';

-- One to one 
create table laptop (
    l_id int,
    name varchar(255),
    brand varchar(255),
    color varchar(255),
    primary key(l_id),
    foreign key(l_id) references student(id)
);

ALTER TABLE laptop
ADD s_id int DEFAULT 0
AFTER l_id;

insert into laptop (l_id, name, brand, color) values (1, 'Pro Book', 'HP', 'black');


-- One to Many 
create table payment (
    p_id int,
    s_id int,
    value varchar(255),
    description varchar(255),
    primary key(p_id),
    foreign key(s_id) references student(id)
);

insert into payment (p_id, s_id, value, description) values (1, 1, '12000', 'First Oayment');

-- Many to Many 
create table course (
    c_id int,
    name varchar(255),
    value varchar(255),
    primary key(c_id)
);

insert into course (c_id, name, value) values (1, 'AMWD', '80000');

create table register (
    r_id int,
    s_id int,
    c_id int,
    primary key(r_id),
    foreign key(s_id) references student(id),
    foreign key(c_id) references course(c_id)
);

insert into register (r_id, s_id, c_id) values (1, 1, 1);

-- Inner Join
select * from student Inner join payment on student.id = payment.s_id;

-- right join 
select * from student right join payment on student.id = payment.s_id;

-- Left join 
select * from student left join payment on student.id = payment.s_id;