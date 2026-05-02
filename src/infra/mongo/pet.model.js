const mongoose = require('mongoose');

module.exports = mongoose.model('Pet', new mongoose.Schema({
  id: Number,
  name: String,
  status: String
}));