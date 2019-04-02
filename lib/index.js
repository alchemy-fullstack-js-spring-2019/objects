
function animalConstructor(name, species) {
  this.name = name;
  this.species = species;
  return this.name;
}

function animalFactory(name, species) {
  return {
    name,
    species,
    speak(){
      return (`Hi, my name is ${this.name}`);    
    }
  };
}

class Person {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak(){
    return (`Yes, my name is still ${this.name}`);
  }
}

module.exports = { animalConstructor, animalFactory, Person };
