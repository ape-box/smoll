-- Table: public."Articles"

-- DROP TABLE public."Articles";

CREATE TABLE public."Articles"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Title" character varying[] COLLATE pg_catalog."default",
    "Slug" character varying[] COLLATE pg_catalog."default",
    "Description" character varying[] COLLATE pg_catalog."default",
    "Abstract" character varying[] COLLATE pg_catalog."default",
    "Content" character varying[] COLLATE pg_catalog."default",
    "Status" smallint,
    "PublishDate" timestamp without time zone,
    "ExpireDate" timestamp without time zone,
    "CreatedDate" timestamp without time zone,
    "ModifiedDate" timestamp without time zone,
    "CreatedBy" character varying[] COLLATE pg_catalog."default",
    "ModifiedBy" character varying[] COLLATE pg_catalog."default",
    "Version" bytea,
    CONSTRAINT "Articles_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Articles"
    OWNER to smoll;