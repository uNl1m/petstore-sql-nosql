const express = require('express');
const cors = require('cors');
const PetService = require('./domain/pet.service');
const swaggerUi = require('swagger-ui-express');
const createRepo = require('./infra/pet.repository.factory');
const controller = require('./api/pets.controller');

const app = express();
app.use(cors());
app.use(express.json());

const repo = createRepo();
const service = new PetService(repo);

app.post('/pet', controller.createPet(service));
app.get('/pet/:id', controller.getPet(service));
app.put('/pet/:id', controller.updatePet(service));
app.delete('/pet/:id', controller.deletePet(service));

const swaggerDocument = require('./swagger/swagger.json');

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

module.exports = app;