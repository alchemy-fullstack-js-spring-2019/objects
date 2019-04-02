const AnimalConstructor = function(name) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.speak = function() {
  return 'My name is ${this.name} and I am a ${this.species}';
};

module.exports = {
  AnimalConstructor
};
