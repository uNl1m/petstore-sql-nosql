# Petstore API

A Petstore-style REST API built with **Node.js + Express**, supporting
**MongoDB or PostgreSQL**, documented via **Swagger UI**, and fully covered by
**integration tests using Jest and Supertest**.

---

## ✨ Features

- Full CRUD for Pets (`POST / GET / PUT / DELETE`)
- Swagger UI from a static `swagger.json`
- MongoDB **or** PostgreSQL (switchable via env / Docker Compose profiles)
- Integration tests verifying:
  - HTTP responses
  - Actual database state
  - Cleanup of test-created data only
- Docker-first setup

---

## 📦 Requirements

- Node.js **>= 18**
- Docker & Docker Compose
- npm

---

## 🧾 Environment Variables

### `.env.mongo`

DB_TYPE=mongo

MONGO_URL=mongodb://mongo:27017/petstore

PORT=3000

### `.env.postgres`


DB_TYPE=postgres

POSTGRES_URL=postgres://postgres:postgres@postgres:5432/petstore

PORT=3000


## Running MongoDB

ENV_FILE=.env.mongo docker compose --profile mongo up



## Running PostgreSQL

ENV_FILE=.env.sql docker compose --profile sql up


## Swagger doc

[localhost:](http://localhost:3000/api-docs)


## Run the test locally

npm run test:mongo

npm run test:sql

## Inspect MongoDb


docker exec -it petstore-node-mongo-mongo-1 mongosh

use petstore

db.pets.find().pretty()


## Inspect PostgreSQL

docker exec -it petstore-node-mongo-postgres-1 psql -U postgres -d petstore

\dt

SELECT * FROM "Pets";
