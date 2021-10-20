DROP TABLE IF EXISTS postsdb;

CREAT TABLE postsdb (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    post_body varchar(255) NOT NULL
)

