exports.createPet = s => async (req, res) =>
  res.status(201).json(await s.createPet(req.body));

exports.getPet = s => async (req, res) => {
  const pet = await s.getPetById(req.params.id);
  return pet ? res.json(pet) : res.sendStatus(404);
};

exports.updatePet = s => async (req, res) => {
  const pet = await s.updatePet(req.params.id, req.body);
  return pet ? res.json(pet) : res.sendStatus(404);
};

exports.deletePet = s => async (req, res) => {
  const ok = await s.deletePet(req.params.id);
  return ok ? res.sendStatus(204) : res.sendStatus(404);
};