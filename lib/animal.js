
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `My name is ${this.name} and I think of myself as a ${this.species}`;
};

function AnimalFactory(name) {
  return {
    name,
    species
  }
}

module.exports = { AnimalConstructor, AnimalFactory };
