const {
  AnimalConstructor,
  AnimalFactory,
  AnimalClass
} = require('../lib/animal');

describe('animal object constructor', () => {
  describe('AnimalConstructor', () => {
    it('has name', () => {
      const dog = new AnimalConstructor('bean', 'dog');
      expect(dog.name).toEqual('bean');
    });

    it('has species', () => {
      const dog = new AnimalConstructor('bean', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('says name', () => {
      const dog = new AnimalConstructor('bean', 'dog');
      expect(dog.name).toEqual('bean');
    });
  });

  describe('AnimalFactory', () => {
    it('has name', () => {
      const dog = AnimalFactory('bean', 'dog');
      expect(dog.name).toEqual('bean');
    });

    it('speaks the name', () => {
      const dog = AnimalFactory('bean', 'dog');
      expect(dog.speak()).toEqual('I am bean, I am a dog');
    });
  });

  describe('AnimalClass', () => {
    it('has species', () => {
      const dog = AnimalFactory('bean', 'dog');
      expect(dog.species).toEqual('dog');
    });

    it('has name', () => {
      const dog = new AnimalClass('bean', 'dog');
      expect(dog.name).toEqual('bean');
    });

    it('has method speak', () => {
      const dog = new AnimalClass('bean', 'dog');
      expect(dog.speak()).toEqual('I am bean, I am a dog');
    });
  });
});

// ['dog', 'bean', 'fido']
//   .map(name => new AnimalClass(name, 'dog'));

