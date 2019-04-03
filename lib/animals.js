function animalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

animalConstructor.prototype.speak = function() {
  return `My name is ${this.name} and I'm a ${this.species}`;
};


module.exports = {
  animalConstructor
};


// const Person = function(name, phone, age) {
//   this.name = name;
//   this.phone = phone;
//   this.age = age;
// };

// Person.prototype.sayHi = function() {
//   console.log(`Hi, I'm ${this.name}`);
// };
