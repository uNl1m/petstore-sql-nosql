const mongoose = require('mongoose');
const Pet = require('../../src/infra/mongo/pet.model');

module.exports = {
  Pet,
  async connect() {
    if (mongoose.connection.readyState === 1) return;
    await mongoose.connect(process.env.MONGO_URL, {
      maxPoolSize: 1,
      serverSelectionTimeoutMS: 5000,
    });
  },

  async clear() {
    if (mongoose.connection.readyState !== 1) return;
    for (const collection of Object.values(mongoose.connection.collections)) {
      await collection.deleteMany({});
    }
  },


  async close() {
    if (!mongoose.connection) return;

    // ✅ THIS is what actually fixes TCPWRAP
    await mongoose.connection.close(true);
  },

  async deletePetsByIds(ids) {
    if (ids.length === 0) return;
    await Pet.deleteMany({ id: { $in: ids } });
  },
};