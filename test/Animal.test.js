const { AnimalConstructor, AnimalFactory, AnimalClass } = require('../lib/Animal');

describe('animal object creators', () => {
  describe('AnimalConstructor function', () => {
    it('has a name property', () => {
      const dog = new AnimalConstructor('spot');
      expect(dog.name).toEqual('spot');
    });

    it('has a species property', () => {
      const dog = new AnimalConstructor('spot', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('can speak its name and species', () => {
      const dog = new AnimalConstructor('spot', 'dog');
      expect(dog.speak()).toEqual('Hi, my name is spot, and I am a dog.');
    });
  });

  describe('AnimalFactory function', () => {
    it('has a name property', () => {
      const dog = new AnimalFactory('spot');
      expect(dog.name).toEqual('spot');
    });

    it('has a species property', () => {
      const dog = new AnimalFactory('spot', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('can speak its name and species', () => {
      const dog = new AnimalFactory('spot', 'dog');
      expect(dog.speak()).toEqual('Hi, my name is spot, and I am a dog.');
    });
  });

  describe('AnimalClass class', () => {
    it('has a name property', () => {
      const dog = new AnimalClass('spot');
      expect(dog.name).toEqual('spot');
    });

    it('has a species property', () => {
      const dog = new AnimalClass('spot', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('can speak its name and species', () => {
      const dog = new AnimalClass('spot', 'dog');
      expect(dog.speak()).toEqual('Hi, my name is spot, and I am a dog.');
    });
  });
});
