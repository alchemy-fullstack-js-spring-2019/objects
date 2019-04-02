const AnimalConstructor = function(name, species) {
    this.name = name;
    this.species = species;
};

AnimalConstructor.prototype.speak = function() {
    return `My name is ${this.name} and I am a ${this.species}`;
};

// const dog = new AnimalConstructor('Fluffy', 'golden retriever');

// dog.speak();

const AnimalFactory = function(name, species) {
    return {
        name,
        species,
        speak() {
            return `My name is ${this.name} and I am a ${this.species}`;
        }
    }
};

// const cat = new AnimalFactory('Barry', 'cat');

// cat.speak();

module.exports = { 
    AnimalConstructor,
    AnimalFactory
};
