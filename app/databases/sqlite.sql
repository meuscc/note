CREATE TABLE tb_item
(
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  uid           TEXT NOT NULL UNIQUE,
  name          TEXT NOT NULL,
  content       TEXT NOT NULL,
  created_date  INTEGER,
  created_by_id INTEGER
);

CREATE TABLE tb_type
(
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  uid       TEXT NOT NULL UNIQUE,
  parent_id TEXT,
  name      TEXT NOT NULL,
  content   TEXT
);

CREATE TABLE tb_tag
(
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  uid  TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL
);

CREATE TABLE tb_user
(
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  uid      TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
