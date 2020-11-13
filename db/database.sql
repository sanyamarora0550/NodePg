CREATE DATABASE user_database;
CREATE TABLE public.user (
    user_id SERIAL PRIMARY KEY NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    gender VARCHAR(30),
    age smallint
);
ALTER TABLE public.user
ADD COLUMN is_active boolean DEFAULT 'true' NOT NULL;
ALTER TABLE public.user
ADD COLUMN date_created timestamp with time zone DEFAULT now() NOT NULL;