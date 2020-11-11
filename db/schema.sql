DROP TABLE IF EXISTS visits;

CREATE TABLE visits (
  ID SERIAL PRIMARY KEY,
  ip VARCHAR(39),
  user_agent VARCHAR(200),
  accepted_language VARCHAR(200),
  referer VARCHAR(200),
  timestamp_visit TIMESTAMP WITH TIME ZONE NOT NULL
);