function AnimalConstructor(name, species, sound) {
  this.name = name;
  this.species = species;
  this.sound = sound;
}

AnimalConstructor.prototype.speak = function() {
  return `${this.name} is a ${this.species} and says ${this.sound}`;
};

module.exports = {
  AnimalConstructor,
};
