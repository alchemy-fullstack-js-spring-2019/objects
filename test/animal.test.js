const { 
    AnimalConstructor, 
    AnimalFactory, 
    AnimalClass
} = require('../lib/animals');

describe('animal object creators', () => {
    describe('AnimalConstructor', () => {
        it('has a name property', () => {
            const dog = new AnimalConstructor('megan', 'dog');
            expect(dog.name).toEqual('megan');
        });
        it('has a species property', () => {
            const dog = new AnimalConstructor('megan', 'dog');
            expect(dog.species).toEqual('dog');
        });
        it('has a method speak', () => {
            const dog = new AnimalConstructor('megan', 'dog');
            expect(dog.speak()).toEqual('my name is megan and I am a dog');
        });
    });
    describe('AnimalFactory', () => {
        it('has a name property', () => {
            const dog = AnimalFactory('rover', 'dog');
            expect(dog.name).toEqual('rover');
        });
    });
    describe('AnimalClass', () => {
        it('has a name property', () => {
            const dog = new AnimalClass('bob', 'dog');
            expect(dog.name).toEqual('bob');
        });
    });
});

