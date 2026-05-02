const express = require('express');
const cors = require('cors');
const PetService = require('./domain/pet.service');
const swaggerUi = require('swagger-ui-express');
const createRepo = require('./infra/pet.repository.factory');
const ctrl = require('./api/pets.controller');

const app = express();
app.use(cors());
app.use(express.json());

const repo = createRepo();
const service = new PetService(repo);

app.post('/pet', ctrl.createPet(service));
app.get('/pet/:id', ctrl.getPet(service));
app.put('/pet/:id', ctrl.updatePet(service));
app.delete('/pet/:id', ctrl.deletePet(service));


app.use(express.json());

const swaggerDocument = require('./swagger/swagger.json');

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);


module.exports = app;