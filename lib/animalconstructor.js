const animalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
  const phrase = (`MOO, I'm ${this.name} and I'm a ${this.species}.`);
  speak(phrase);
};



module.exports = animalConstructor;
