const createdPetIds = new Set();

function trackPet(id) {
  createdPetIds.add(id);
}

function getTrackedPets() {
  return [...createdPetIds];
}

function clearTrackedPets() {
  createdPetIds.clear();
}

module.exports = {
  trackPet,
  getTrackedPets,
  clearTrackedPets,
};