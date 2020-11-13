CREATE DATABASE user_database;
CREATE TABLE public.user (
    user_id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    gender VARCHAR(30),
    age smallint
);