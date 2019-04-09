function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
  this.speak = function() {
    return `Hi! I am ${ this.name } the ${ this.species }.`;
  };
}

function AnimalConstructorAlt(name, species) {
  this.name = name;
  this.species = species;  
}

AnimalConstructorAlt.prototype.speak = function() {
  return `Hi! I am ${ this.name } the ${ this.species }.`;
};

function AnimalFactory(name, species) {
  return {
    name,
    species,
    speak() {
      return `Hi! I am ${ this.name } the ${ this.species }.`;
    }
  };
}

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    return `Hi! I am ${ this.name } the ${ this.species }.`;
  }
}

module.exports = {
  AnimalConstructor,
  AnimalConstructorAlt,
  AnimalFactory,
  AnimalClass
};
