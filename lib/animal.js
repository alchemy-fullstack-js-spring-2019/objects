//const animalConstructor = function() {
  function AnimalConstructor(name, species) {
    this.name = name;
    this.species = species;
  }
  
  AnimalConstructor.prototype.speak = function() {
    return `I am ${this.name}, I am a ${this.species}`;
  };
  
  function AnimalFactory(name, species) {
    return {
      name,
      species,
      speak() {
        return `I am ${this.name}, I am a ${this.species}`;
      }
    }
  }
  
  class AnimalClass {
    constructor(name, species) {
      this.name = name;
      this.species = species;
    }
  
    speak() {
      return `I am ${this.name}, I am a ${this.species}`;
    }
  }
  
  module.exports = {
    AnimalConstructor,
    AnimalFactory,
    AnimalClass
  };  
