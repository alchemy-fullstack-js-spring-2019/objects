//animal constructor 
const Animal = function(name, species) {
  this.name = name;
  this.species = species;
};

Animal.prototype.speak = function() {
  return `I'm a ${this.species}`;
};

module.exports =  { Animal };
