drop table devs;

create table devs(
  name varchar(20) 
);


insert into devs values('akshay');
insert into devs values('aditya');
insert into devs values('adak');

-- for InvMan 
create table items(
 id int,
 name varchar(100) ,
 code varchar(100),
 unit varchar(100),
 quantity int,
 price int,
 descp varchar(600),
 category varchar(100)
);

insert into items values(1,'Wheet','P1','Kilo',100,76,'','');
insert into items values(2,'Rice','P2','Kilo',220,80,'','');

select * from items;
