const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.speak = function() {
  return `Hi, my name is ${this.name}, and I am a ${this.species}.`;
};

const AnimalFactory = function(name, species) {
  return {
    name,
    species,
    speak() {
      return `Hi, my name is ${this.name}, and I am a ${this.species}.`;
    }
  };
};

module.exports = { AnimalConstructor, AnimalFactory };
