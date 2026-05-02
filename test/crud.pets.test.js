const request = require('supertest');
const app = require('../src/app');
const db = require('./db/testDb');
const { buildPet } = require('./data/pet.data');
const { trackPet, getTrackedPets, clearTrackedPets } = require('./db/clean.up');

describe('Pet API – full CRUD ', () => {

  beforeAll(async () => {
    await db.connect();
  });
  
  afterEach(async () => {
    const ids = getTrackedPets();
    await db.deletePetsByIds(ids);
    clearTrackedPets();
  });
  
  afterAll(async () => {
    await db.close();
  });
  /**
   * CREATE
   */
  describe('POST /pet', () => {
    it('creates a pet and persists it in DB', async () => {
      const pet = buildPet({ status: 'available' });

      const res = await request(app)
        .post('/pet')
        .send(pet)
        .expect(201);

      
      // ✅ API response
      expect(res.body).toMatchObject({
        id: pet.id,
        name: pet.name,
        status: pet.status,
      });

      // ✅ DB assertion
      const petInDb = db.Pet.findByPk
        ? await db.Pet.findByPk(pet.id)           // PostgreSQL
        : await db.Pet.findOne({ id: pet.id });  // MongoDB

      expect(petInDb).not.toBeNull();
      expect(petInDb.name).toBe(pet.name);

      // ✅ cleanup tracking
      trackPet(pet.id);
    });
  });

  /**
   * READ
   */
  describe('GET /pet/:id', () => {
    it('returns an existing pet', async () => {
      const pet = buildPet();
      trackPet(pet.id);

      // ✅ prepare data
      await db.Pet.create(pet);

      const res = await request(app)
        .get(`/pet/${pet.id}`)
        .expect(200);

      expect(res.body).toMatchObject({
        id: pet.id,
        name: pet.name,
        status: pet.status,
      });
    });

    it('returns 404 if pet does not exist', async () => {
      await request(app)
        .get('/pets/999999')
        .expect(404);
    });
  });

  /**
   * UPDATE
   */
  describe('PUT /pet/:id', () => {
    it('updates an existing pet', async () => {
      const pet = buildPet({ status: 'available' });
      trackPet(pet.id);

      // ✅ prepare data
      await db.Pet.create(pet);

      const res = await request(app)
        .put(`/pet/${pet.id}`)
        .send({ status: 'sold' })
        .expect(200);

      // ✅ API response
      expect(res.body.status).toBe('sold');

      // ✅ DB assertion
      const petInDb = db.Pet.findByPk
        ? await db.Pet.findByPk(pet.id)
        : await db.Pet.findOne({ id: pet.id });

      expect(petInDb.status).toBe('sold');
    });

    it('returns 404 if pet does not exist', async () => {
      await request(app)
        .put('/pets/123456')
        .send({ status: 'sold' })
        .expect(404);
    });
  });

  /**
   * DELETE
   */
  describe('DELETE /pets/:id', () => {
    it('deletes a pet from DB', async () => {
      const pet = buildPet();
      trackPet(pet.id);

      // ✅ prepare data
      await db.Pet.create(pet);

      await request(app)
        .delete(`/pet/${pet.id}`)
        .expect(204);

      // ✅ DB assertion
      const petInDb = db.Pet.findByPk
        ? await db.Pet.findByPk(pet.id)
        : await db.Pet.findOne({ id: pet.id });

      expect(petInDb).toBeNull();
    });
  })
});