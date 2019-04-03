const { AnimalConstructor, AnimalFactory, AnimalClass } = require('../lib/index');

describe('AnimalConstructor', () => {
  it('Creates a new object with constructor', () => {
    const expected = {
      name: 'Jack',
      species: 'dog'
    };
    const result = new AnimalConstructor('Jack', 'dog');
    expect(result).toEqual(expected);
  });

  it('Function speak with constructor', () => {
    const expected = 'Jack, dog';
    const jack = new AnimalConstructor('Jack', 'dog');
    const result = jack.speak();
    expect(result).toEqual(expected);
  });
});

describe('Animal Factory', () => {
  it('Has a name property', () => {
    const result = AnimalFactory('Jack', 'dog');
    expect(result.name).toEqual('Jack');
  });

  it('Has a species property', () => {
    const result = AnimalFactory('Jack', 'dog');
    expect(result.species).toEqual('dog');
  });

  it('Has a speak method', () => {
    const result = AnimalFactory('Jack', 'dog');
    expect(result.speak()).toEqual('Jack, dog');
  });
});

describe('Animal Class', () => {
  it('Has a name property', () => {
    const result = new AnimalClass('Jack', 'dog');
    expect(result.name).toEqual('Jack');
  });

  it('Has a species property', () => {
    const result = new AnimalClass('Jack', 'dog');
    expect(result.species).toEqual('dog');
  });

  it('Has a speak method', () => {
    const result = new AnimalClass('Jack', 'dog');
    expect(result.speak()).toEqual('Jack, dog');
  });
});
