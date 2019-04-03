function animalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

animalConstructor.prototype.speak = function() {
  return `My name is ${this.name} and I'm a ${this.species}`;
};


function animalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `My name is ${this.name} and I'm a ${this.species}`;
    }
  };
}


class animalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `My name is ${this.name} and I'm a ${this.species}`;
  }
}


module.exports = {
  animalConstructor,
  animalFactory,
  animalClass
};
