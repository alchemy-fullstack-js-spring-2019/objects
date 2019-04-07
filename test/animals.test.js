const {
  AnimalConstructor
} = require('../lib/animals');

describe('animal object creators', () => {
  describe('AnimalConstructor', () => {
    it('has a name property', () => {
      const dog = new AnimalConstructor('rover', 'dog');
      expect(dog.name).toEqual('rover');
    });

    it('has a species property', () => {
      const dog = new AnimalConstructor('rover', 'dog');
      expect(dog.species).toEqual('dog');
    });
  });

  it('has a speak property', () => {
    const dog = new AnimalConstructor('rover', 'dog');
    expect(dog.speak()).toEqual('My name is rover and I am a dog');
  });
});
