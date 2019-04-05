function AnimalConstructor(name, species) {
    this.name = name;
    this.species = species;
}

AnimalConstructor.prototype.speak = function() {
    return `my name is ${this.name} and i am a ${this.species}`;
};

const AnimalFactory = function(name, species) {
    return {
        name,
        species,
        speak() {
            return `hi my name is ${this.name} and i am a ${this.species}`;
        }
    };
};

class AnimalClass {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak(){
        return `hi my name is ${this.name} and i am a ${this.species}`;
    }
}

module.exports = {
    AnimalConstructor,
    AnimalFactory,
    AnimalClass
};
