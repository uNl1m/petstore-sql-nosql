const connect = require('./mongo.connection');
const Pet = require('./pet.model');

connect();

module.exports = class {
  create(p) { return Pet.create(p); }
  findById(id) { return Pet.findOne({ id }); }
  update(id, p) {
    return Pet.findOneAndUpdate({ id }, p, { new: true });
  }
  async delete(id) {
    const r = await Pet.deleteOne({ id });
    return r.deletedCount > 0;
  }
};