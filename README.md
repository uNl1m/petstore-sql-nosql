ENV_FILE=.env.mongo docker compose --profile mongo up



ENV_FILE=.env.sql docker compose --profile sql up

run test


DB_TYPE=mongo MONGO_URL=mongodb://localhost:27017/petstore npm test
# petstore-sql-nosql
