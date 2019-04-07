function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `My name is ${this.name} and I am a ${this.species}`;
};

function AnimalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `My name is ${this.name} and I am a ${this.species}`;
    }
  };
}

class AnimalClass {
  constructor(name) {
    this.name = name;
  }
}

module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};
