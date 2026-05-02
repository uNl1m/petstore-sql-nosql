module.exports = () =>
  process.env.DB_TYPE === 'mongo'
    ? new (require('./mongo/mongo.pet.repository'))()
    : new (require('./sql/sql.pet.repository'))();
