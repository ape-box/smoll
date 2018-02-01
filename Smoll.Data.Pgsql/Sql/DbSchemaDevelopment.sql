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
    "Status" integer,-- Enums are not working very well yet
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

-- Table: public."Polls"

-- DROP TABLE public."Polls";

CREATE TABLE public."Polls"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Title" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "ImageUrl" character varying COLLATE pg_catalog."default",
    "Status" integer,-- Enums are not working very well yet
    "PublishDate" timestamp without time zone,
    "ExpireDate" timestamp without time zone,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "Polls_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Polls"
    OWNER to smoll;

-- Table: public."Proposals"

-- DROP TABLE public."Proposals";

CREATE TABLE public."Proposals"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Title" character varying COLLATE pg_catalog."default",
    "Subtitle" character varying COLLATE pg_catalog."default",
    "Slug" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "Abstract" character varying COLLATE pg_catalog."default",
    "Content" character varying COLLATE pg_catalog."default",
    "Status" integer,-- Enums are not working very well yet
    "PublishDate" timestamp without time zone,
    "ExpireDate" timestamp without time zone,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "Proposals_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Proposals"
    OWNER to smoll;

-- Table: public."Queues"

-- DROP TABLE public."Queues";

CREATE TABLE public."Queues"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Title" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "ImageUrl" character varying COLLATE pg_catalog."default",
    "Status" integer,-- Enums are not working very well yet
    "PublishDate" timestamp without time zone,
    "ExpireDate" timestamp without time zone,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "Queues_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Queues"
    OWNER to smoll;

-- Table: public."Suggestions"

-- DROP TABLE public."Suggestions";

CREATE TABLE public."Suggestions"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Title" character varying COLLATE pg_catalog."default",
    "Description" character varying COLLATE pg_catalog."default",
    "ImageUrl" character varying COLLATE pg_catalog."default",
    "Status" integer,-- Enums are not working very well yet
    "PublishDate" timestamp without time zone,
    "ExpireDate" timestamp without time zone,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "Suggestions_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Suggestions"
    OWNER to smoll;

-- Table: public."PollOptions"

-- DROP TABLE public."PollOptions";

CREATE TABLE public."PollOptions"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "DisplayName" character varying COLLATE pg_catalog."default",
    "Details" character varying COLLATE pg_catalog."default",
    "SequenceId" integer,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "PollOptions_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."PollOptions"
    OWNER to smoll;

-- Table: public."QueueOptions"

-- DROP TABLE public."QueueOptions";

CREATE TABLE public."QueueOptions"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "DisplayName" character varying COLLATE pg_catalog."default",
    "Details" character varying COLLATE pg_catalog."default",
    "SequenceId" integer,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "QueueOptions_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."QueueOptions"
    OWNER to smoll;

-- Table: public."SuggestionOptions"

-- DROP TABLE public."SuggestionOptions";

CREATE TABLE public."SuggestionOptions"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "DisplayName" character varying COLLATE pg_catalog."default",
    "Details" character varying COLLATE pg_catalog."default",
    "SequenceId" integer,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying COLLATE pg_catalog."default",
    "ModifiedBy" character varying COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "SuggestionOptions_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."SuggestionOptions"
    OWNER to smoll;

