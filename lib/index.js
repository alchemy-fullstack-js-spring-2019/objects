const AnimalConstructor = function(name, species) {
    this.name = name;
    this.species = species;
};

AnimalConstructor.prototype.speak = function() {
    return `My name is ${this.name} and I am a ${this.species}`;
};

const AnimalFactory = function(name, species) {
    return {
        name,
        species,
        speak() {
            return `My name is ${this.name} and I am a ${this.species}`;
        }
    }
};

class AnimalClass {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        return `My name is ${this.name} and I am a ${this.species}`;
    }
}

module.exports = { 
    AnimalConstructor,
    AnimalFactory,
    AnimalClass
};
