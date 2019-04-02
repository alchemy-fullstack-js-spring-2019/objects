

const Dog = AnimalConstructor(name, species) {
    this.name = name;
    this.species = species;
};

//Dog.prototype.sayHi = function



function AnimalFactory(name, species) {
    return {
        name, 
        species,
        speak() {
            return `my name is ${this.name}`;
        }
    };
}

class AnimalClass {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak() {
        return `my name is ${this.name} and I am a ${this.species}`;
    }
}
module.exports = { AnimalConstructor, AnimalFactory, AnimalClass };
