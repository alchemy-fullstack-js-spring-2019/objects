const Animal = function(name, species) {
  return {
    name,
    species,
    speak() {
      return 'Hello';
    }
  };
};

module.exports = Animal;
