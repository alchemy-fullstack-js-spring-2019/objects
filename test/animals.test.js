const { animalConstructor } = require('../lib/animals');

describe('animal creators', () => {
  let animal = null;
  beforeEach(() => {
    animal = new animalConstructor('Tom', 'cat');
  });
  describe('animal constructor', () => {
    it('has a name', () => {
      expect(animal.name).toEqual('Tom');
    });

    it('has a species', () => {
      expect(animal.species).toEqual('cat');
    });

    it('has a name', () => {
      expect(animal.speak()).toEqual('My name is Tom and I\'m a cat');
    });
  });
});
