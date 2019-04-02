function animalConstructor(name, species) {
  this.name = name;
  this.species = species;
}
animalConstructor.prototype.speak = function() {
  return `I am ${this.name}, the magnificent ${this.species}`;
};

function animalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `I am ${this.name}, the amazing ${this.species}`;
    }
  };
}

module.exports = {
  animalConstructor,
  animalFactory
};
