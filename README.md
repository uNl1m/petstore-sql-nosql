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



---

### 🔍 What the Tests Check

#### 🐾 Pet Management
- Create a new pet with valid data
- Retrieve pet details by ID
- Update existing pet information
- Delete a pet and verify it is no longer accessible
- Validate error handling for non‑existing pet IDs

#### 👤 Store & Inventory
- Retrieve inventory status
- Validate response structure and data types
- Ensure inventory values are not negative

#### 🧾 Order Processing
- Place a new order for a pet
- Retrieve order details by order ID
- Delete an order and verify removal
- Handle invalid and expired orders correctly



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
