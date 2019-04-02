
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
  return this.name;
}

AnimalConstructor.prototype.speak = function(){
  return `${this.name}`;
};

//factory does NOT take the "new" instance in front of it
function AnimalFactory(name, species) {
  return {
    name,
    species,
    speak(){
      return (`Hi, my name is ${this.name}`);    
    }
  };
}

class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak(){
    return (`Yes, my name is still ${this.name}`);
  }
}

module.exports = { AnimalConstructor, AnimalFactory, AnimalClass };
