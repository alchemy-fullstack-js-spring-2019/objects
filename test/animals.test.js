const {
  AnimalConstructor
} = require('../lib/animals');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has a name property', () => {
      const dog = new AnimalConstructor('rover', dog);
      expect(dog.name).toEqual('rover');
    });
    it('has a species property', () => {
      const dog = new AnimalConstructor('rover', dog);
      expect(dog.species).toEqual('dog');
    });
  });
});
