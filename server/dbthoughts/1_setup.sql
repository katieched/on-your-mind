DROP TABLE IF EXISTS thoughts;

CREATE TABLE thoughts (
    id serial PRIMARY KEY,
    title varchar(255),
    pseudonym varchar(255),
    post_body varchar(500)
);

