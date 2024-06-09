-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database LiloStich;
use LiloStich;

create table usuario 
(IDUsuario int primary key auto_increment,
NomeUsuario Varchar(50),
SobrenomeUsuario varchar (50),
EmailUsuario varchar(50),
SenhaUsuario varchar(50));
