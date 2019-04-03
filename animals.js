function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
} 

AnimalConstructor.prototype.speak = function() {
  return `My name is ${this.name}`;
};

module.exports = {
  AnimalConstructor
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

