const { AnimalConstructor, AnimalFactory, AnimalClass } = require('../lib/Animal');

describe('animal object creators', () => {

    describe ('tests the animal constructor', () => {
        it('has a name property', () => {
            const dog = new AnimalConstructor('rover', 'dog');
            expect(dog.name).toEqual('rover');
        });
        it('has a species property function', () => {
            const dog = new AnimalConstructor('rover', 'dog');
            expect(dog.species).toEqual('dog');
        });
        it('has a speak method', () => {
            const dog = new AnimalConstructor('rover', 'dog');
            expect(dog.speak()).toEqual('My name is rover. I am a dog.');
        });
    });

    describe ('tests the animal factory function', () => {
        it('has a name property', () => {
            const dog = AnimalFactory('rover', 'dog');
            expect(dog.name).toEqual('rover');
        });
        it('has a species property', () => {
            const dog = AnimalFactory('rover', 'dog');
            expect(dog.species).toEqual('dog');
        });
        it('has a speak method', () => {
            const dog = AnimalFactory('rover', 'dog');
            expect(dog.speak()).toEqual('My name is rover. I am a dog.');
        });
    });

    describe ('tests AnimalClass', () => {
        it('has a name property', () => {
            const dog = new AnimalClass('rover', 'dog');
            expect(dog.name).toEqual('rover');
        });
        it('has a species property', () => {
            const dog = new AnimalClass('rover', 'dog');
            expect(dog.species).toEqual('dog');
        });
        it('has a speak method', () => {
            const dog = new AnimalClass('rover', 'dog');
            expect(dog.speak()).toEqual('My name is rover. I am a dog.');
        });
    });
});
