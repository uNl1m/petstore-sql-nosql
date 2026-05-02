class PetService {
  constructor(repo) {
    this.repo = repo;
  }

  createPet(p) { return this.repo.create(p); }
  getPetById(id) { return this.repo.findById(id); }
  updatePet(id, p) { return this.repo.update(id, p); }
  deletePet(id) { return this.repo.delete(id); }
}
module.exports = PetService;