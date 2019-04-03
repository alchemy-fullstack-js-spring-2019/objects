function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
} 

AnimalConstructor.prototype.speak = function() {
  return `My name is ${this.name} and I am a ${this.species}`;
};

function AnimalFactory(name, species) {
  this.name = name;
  this.species = species;
}
AnimalFactory.prototype.speak = function() {
  return `My name is ${this.name} and I am a ${this.species}`;
};

function AnimalClass(name, species) {
  this.name = name;
  this.species = species;
}
AnimalClass.prototype.speak = function() {
  return `My name is ${this.name} and I am a ${this.species}`;
}


module.exports = {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
};

// class AnimalClass {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
// speak() {
//   return `my name is ${this.name} and I am a ${this.species}`
// }
// }

