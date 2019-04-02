const Animal = function(name, species, age) {
  this.name = name;
  this.species = species;
  this.age = age;
};

Animal.prototype.sayHi = function() {
  return `hi my name is ${this.name}, I am a ${this.species}!!!`;
};

const AnimalFactory = function(name, species, age) {
  return {
    name,
    species, 
    age,
    sayHi() {
      return `hi my name is ${this.name}, I am a ${this.species}!!!`;
    }
  };
};


class AnimalClass {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
  
  sayHi() {
    return `hi my name is ${this.name}, I am a ${this.species}!!!`;
  }
}

module.exports = { Animal, AnimalFactory, AnimalClass };
