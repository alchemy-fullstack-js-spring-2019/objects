const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.speak = function() {
  return `${this.name}, ${this.species}`;
};
// () => `${this.name}, ${this.species}`;

const AnimalFactory = function(name, species) {
  return {
    name,
    species,
    speak() {
      return `${this.name}, ${this.species}`;
    }
  };
};

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name}, ${this.species}`;
  }
}

module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};
