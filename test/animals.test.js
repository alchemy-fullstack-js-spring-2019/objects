const { animalConstructor, animalFactory } = require('../lib/animals');

describe('animal creators', () => {
  let animal = null;
  describe('animal constructor', () => {
    beforeEach(() => {
      animal = new animalConstructor('Tom', 'cat');
    });
    
    it('has a name', () => {
      expect(animal.name).toEqual('Tom');
    });
    
    it('has a species', () => {
      expect(animal.species).toEqual('cat');
    });
    
    it('can speak', () => {
      expect(animal.speak()).toEqual('My name is Tom and I\'m a cat');
    });
  });
  
  describe('we build it in the factory', () => {
    beforeEach(() => {
      animal = animalFactory('Tom', 'cat');
    });

    it('has a name', () => {
      expect(animal.name).toEqual('Tom');
    });
    
    it('has a species', () => {
      expect(animal.species).toEqual('cat');
    });
    
    it('can speak', () => {
      expect(animal.speak()).toEqual('My name is Tom and I\'m a cat');
    });
  });
    
});

