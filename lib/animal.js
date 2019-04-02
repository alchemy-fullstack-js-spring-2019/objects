const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.speak = function() {
  return `I'm ${this.name}, the ${this.species}!`;
};

const AnimalFactory = function(name, species) {
  return {
    name: name,
    species: species,
    speak() {
      `I'm ${this.name}, the ${this.species}!`;
    }
  };
};

module.exports = {
  AnimalConstructor,
  AnimalFactory
};
