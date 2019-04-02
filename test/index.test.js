const { AnimalConstructor, AnimalFactory } = require('../lib/index');

describe('constructor function', () => {
    it('makes a dog and the dog speaks', () => {
        const dog = new AnimalConstructor('Fluffy', 'golden retriever');
        const result = dog.speak();
        expect(result).toBe('My name is Fluffy and I am a golden retriever');
    });
});

describe('factory function', () => {
    it('makes a cat and the cat speaks', () => {
        const cat = new AnimalFactory('Barry', 'black cat');
        const result = cat.speak();
        expect(result).toBe('My name is Barry and I am a black cat');
    });
});
