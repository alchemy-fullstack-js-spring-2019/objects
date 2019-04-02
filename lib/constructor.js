const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.sayHi = function() {
  return `Hi my name is ${this.name}`;
};

const AnimalFactory = function(name, species) {
  return {
    name,
    species,
    sayHi() {
      return `Hi my name is ${this.name}`;
    }
  };
};



module.exports = {
  AnimalConstructor,
  AnimalFactory
};
