const { AnimalConstructor } = require('../lib/animals');

describe('AnimalConstructor Function', () => {
  it('Name property', () => {
    const dog = new AnimalConstructor('Oso', 'dog', 'woof');
    expect(dog.name).toEqual('Oso');
  });

  it('Species property', () => {
    const dog = new AnimalConstructor('Oso', 'dog', 'woof');
    expect(dog.species).toEqual('dog');
  });

  it('Sound property', () => {
    const dog = new AnimalConstructor('Oso', 'dog', 'woof');
    expect(dog.sound).toEqual('woof');
  });

  it('', () => {
    const dog = new AnimalConstructor('Oso', 'dog', 'woof');
    expect(dog.speak()).toEqual('Oso is a dog and says woof');
  });
});

