const sequelize = require('./sequelize');
const Pet = require('./pet.model');

sequelize.sync();

module.exports = class {
  create(p) { return Pet.create(p); }
  findById(id) { return Pet.findByPk(id); }
  async update(id, p) {
    const pet = await Pet.findByPk(id);
    return pet && pet.update(p);
  }
  async delete(id) {
    return (await Pet.destroy({ where: { id } })) > 0;
  }
};