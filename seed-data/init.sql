CREATE DATABASE zero;
CREATE DATABASE zero_cvr;
CREATE DATABASE zero_cdb;

\c zero;

-- CREATE TABLE "user" (
--   "id" VARCHAR PRIMARY KEY,
--   "name" VARCHAR NOT NULL,
--   "partner" BOOLEAN NOT NULL
-- );

-- CREATE TABLE "medium" (
--   "id" VARCHAR PRIMARY KEY,
--   "name" VARCHAR NOT NULL
-- );

-- CREATE TABLE "message" (
--   "id" VARCHAR PRIMARY KEY,
--   "senderID" VARCHAR REFERENCES "user"(id),
--   "mediumID" VARCHAR REFERENCES "medium"(id),
--   "body" VARCHAR NOT NULL,
--   "timestamp" TIMESTAMP not null
-- );

-- INSERT INTO "user" (id, name, partner) VALUES ('ycD76wW4R2', 'Aaron', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('IoQSaxeVO5', 'Matt', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('WndZWmGkO4', 'Cesar', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('ENzoNm7g4E', 'Erik', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('dLKecN3ntd', 'Greg', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('enVvyDlBul', 'Darick', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('9ogaDuDNFx', 'Alex', true);
-- INSERT INTO "user" (id, name, partner) VALUES ('6z7dkeVLNm', 'Dax', false);
-- INSERT INTO "user" (id, name, partner) VALUES ('7VoEoJWEwn', 'Nate', false);

-- INSERT INTO "medium" (id, name) VALUES ('G14bSFuNDq', 'Discord');
-- INSERT INTO "medium" (id, name) VALUES ('b7rqt_8w_H', 'Twitter DM');
-- INSERT INTO "medium" (id, name) VALUES ('0HzSMcee_H', 'Tweet reply to unrelated thread');
-- INSERT INTO "medium" (id, name) VALUES ('ttx7NCmyac', 'SMS');


CREATE TABLE "user" (
  "id" VARCHAR PRIMARY KEY,
  "username" VARCHAR NOT NULL
);

CREATE TABLE "recipe" (
  "id" VARCHAR PRIMARY KEY,
  "ownerId" VARCHAR REFERENCES "user"(id),
  "name" VARCHAR NOT NULL,
  "description" VARCHAR NOT NULL
);

CREATE TABLE "recipeTag" (
  "id" VARCHAR PRIMARY KEY,
  "ownerId" VARCHAR REFERENCES "user"(id),
  "recipeId" VARCHAR REFERENCES "recipe"(id),
  "name" VARCHAR NOT NULL
);

CREATE TABLE "ingredient" (
  "id" VARCHAR PRIMARY KEY,
  "ownerId" VARCHAR REFERENCES "user"(id),
  "recipeId" VARCHAR REFERENCES "recipe"(id),
  "order" VARCHAR NOT NULL,
  "quantity" VARCHAR NOT NULL,
  "unit" VARCHAR NOT NULL,
  "name" VARCHAR NOT NULL
);

CREATE TABLE "recipeStep" (
  "id" VARCHAR PRIMARY KEY,
  "ownerId" VARCHAR REFERENCES "user"(id),
  "recipeId" VARCHAR REFERENCES "recipe"(id),
  "order" VARCHAR NOT NULL,
  "description" VARCHAR NOT NULL
);


INSERT INTO "user" ("id", "username") VALUES ('u001', 'Austin');
INSERT INTO "recipe" ("id", "ownerId", "name", "description") VALUES ('r001', 'u001', 'Pizza', 'Sour Dough Pizza');
INSERT INTO "recipeTag" ("id", "ownerId", "recipeId", "name") VALUES ('t001', 'u001', 'r001', 'pizza');
INSERT INTO "recipeTag" ("id", "ownerId", "recipeId", "name") VALUES ('t002', 'u001', 'r001', 'sourdough');
INSERT INTO "ingredient" ("id", "ownerId", "recipeId", "order", "quantity", "unit", "name") VALUES ('i001', 'u001', 'r001', '1', '1', 'cup', 'Flour');
INSERT INTO "ingredient" ("id", "ownerId", "recipeId", "order", "quantity", "unit", "name") VALUES ('i002', 'u001', 'r001', '2', '1', 'cup', 'Water');
INSERT INTO "ingredient" ("id", "ownerId", "recipeId", "order", "quantity", "unit", "name") VALUES ('i003', 'u001', 'r001', '3', '1', 'pinch', 'Salt');
INSERT INTO "ingredient" ("id", "ownerId", "recipeId", "order", "quantity", "unit", "name") VALUES ('i004', 'u001', 'r001', '4', '1', 'tbsp', 'Yeast');
INSERT INTO "recipeStep" ("id", "ownerId", "recipeId", "order", "description") VALUES ('s001', 'u001', 'r001', '1', 'Mix the flour and water');
INSERT INTO "recipeStep" ("id", "ownerId", "recipeId", "order", "description") VALUES ('s004', 'u001', 'r001', '2', 'Add the salt and yeast');
INSERT INTO "recipeStep" ("id", "ownerId", "recipeId", "order", "description") VALUES ('s002', 'u001', 'r001', '3', 'Let it sit for 24 hours');
INSERT INTO "recipeStep" ("id", "ownerId", "recipeId", "order", "description") VALUES ('s003', 'u001', 'r001', '4', 'Bake the pizza');

