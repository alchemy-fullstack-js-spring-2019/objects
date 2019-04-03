const { AnimalConstructor } = require('../lib/animal');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has a name property', () => {
      const dog = new AnimalConstructor('rover', 'dog');
      expect(dog.name).toEqual('rover');
    });
  });
});
