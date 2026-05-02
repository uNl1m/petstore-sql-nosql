const db = require('./db/testDb');

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  // await db.clear();
});

afterAll(async () => {
  await db.close();
});