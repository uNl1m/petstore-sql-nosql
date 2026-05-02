const mongoose = require('mongoose');

async function connectMongo() {
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 5000,
    maxPoolSize: 1, // ✅ helps Jest exit faster
  });

  console.log('✅ Mongo connected');
}

module.exports = connectMongo;