const { animalConstructor, animalFactory } = require('../lib/index.js');

describe('Animal Constructor Function', () => {
  const input = {
    name: 'Marty',
    species: 'zebra'
  };
  const animal = new animalConstructor(input.name, input.species);
  it('has a name property', () => {
    expect(animal.name).toEqual('Marty');
  });
  it('has a species property', () => {
    expect(animal.species).toEqual('zebra');
  });
  it('has a speak method', () => {
    const expected = 'I am Marty, the magnificent zebra';
    const result = animal.speak();
    expect(result).toEqual(expected);
  });
});

describe('Animal Factory Function', () => {
  it('returns an animal object when passed a name and species', () => {
    const expected = 'I am Rebecca, the amazing aardvark';

    const input = {
      name: 'Rebecca',
      species: 'aardvark'
    };

    const result = animalFactory(input.name, input.species);

    expect(result.speak()).toEqual(expected);
  });
});


