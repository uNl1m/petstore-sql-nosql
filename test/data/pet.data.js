
const { faker } = require('@faker-js/faker');

function buildPet(overrides = {}) {
  return {
    id: faker.datatype.number({ min: 1, max: 1_000 }),
    category: {
      name: faker.helpers.arrayElement(['dog', 'cat', 'fish']),
    },
    name: faker.animal.dog(),
    status: faker.helpers.arrayElement(['available', 'pending', 'sold']),
    ...overrides,
  };
}

module.exports = { buildPet };
