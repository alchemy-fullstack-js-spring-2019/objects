
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `I'm ${this.name} ans I'm a ${this.species}`;
};

function AnimalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `I'm ${this.name} ans I'm a ${this.species}`;
    }
  };
}

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `I'm ${this.name} an I'm a ${this.species}`;
  }
}


module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};
