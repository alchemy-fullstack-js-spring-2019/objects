function AnimalConstructor(name, species) {
    this.name = name;
    this.species = species;
}

AnimalConstructor.prototype.speak = function() {
    return `I am a ${this.species} named ${this.name}!`;
};

function AnimalFactory(name, species) {
    return {
        name,
        species,
        speak() {
            return `I am a ${this.species} named ${this.name}!`;
        }
    };
}

class AnimalClass {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak() {
        return `I am a ${this.species} named ${this.name}!`; 
    }
}

module.exports = {
    AnimalConstructor,
    AnimalFactory,
    AnimalClass
};
