const Animal = function(name, species){
  this.name = name;
  this.species = species;
};

Animal.prototype.speak = function() {
  return 'Hello';
};
  
module.exports = Animal;
