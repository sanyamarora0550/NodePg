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
ALTER TABLE public.user
ADD COLUMN password VARCHAR(400) DEFAULT '' NOT NULL;
CREATE TABLE public.user_task (
    user_id INT NOT NULL,
    task_id SERIAL NOT NULL,
    task_details VARCHAR(500) NOT null,
    primary key(user_id, task_id)
);
ALTER TABLE public.user_task
ADD COLUMN is_pending boolean DEFAULT 'true' NOT NULL;
ALTER TABLE public.user_task
ADD COLUMN date_created timestamp with time zone DEFAULT now() NOT NULL;