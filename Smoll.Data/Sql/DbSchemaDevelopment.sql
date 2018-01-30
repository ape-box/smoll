-- Database: smolldevelopment

-- DROP DATABASE smolldevelopment;

CREATE DATABASE smolldevelopment
    WITH 
    OWNER = smoll
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United Kingdom.1252'
    LC_CTYPE = 'English_United Kingdom.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT ALL ON DATABASE smolldevelopment TO smoll;

GRANT TEMPORARY, CONNECT ON DATABASE smolldevelopment TO PUBLIC;


CREATE EXTENSION "uuid-ossp";


-- Type: publish_status

-- DROP TYPE public.publish_status;

CREATE TYPE public.publish_status AS ENUM
    ('Draft', 'Published', 'Archived', 'TakenDown');

ALTER TYPE public.publish_status
    OWNER TO postgres;

	
-- Table: public."Articles"

-- DROP TABLE public."Articles";

CREATE TABLE public."Articles"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Title" character varying COLLATE pg_catalog."default",
    "Subtitle" character varying COLLATE pg_catalog."default",
    "Slug" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "Abstract" character varying COLLATE pg_catalog."default",
    "Content" character varying COLLATE pg_catalog."default",
    "Status" publish_status,
    "PublishDate" timestamp without time zone,
    "ExpireDate" timestamp without time zone,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "Articles_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Articles"
    OWNER to smoll;