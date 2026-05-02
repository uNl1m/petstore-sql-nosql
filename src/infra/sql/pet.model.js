const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('Pet', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING,
  status: DataTypes.STRING
}, { timestamps: false });