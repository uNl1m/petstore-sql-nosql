module.exports = process.env.DB_TYPE === 'mongo'
  ? require('./mongo.testdb')
  : require('./sql.testdb');