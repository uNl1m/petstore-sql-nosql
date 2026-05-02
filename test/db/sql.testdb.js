const sequelize = require('../../src/infra/sql/sequelize');
const Pet = require('../../src/infra/sql/pet.model');

module.exports = {
  Pet,
  connect: () => sequelize.sync({ force: true }),
  clear: () => sequelize.truncate(),
  close: () => sequelize.close(),
  async deletePetsByIds(ids) {
    if (ids.length === 0) return;
    await Pet.destroy({ where: { id: ids } });
  }
};