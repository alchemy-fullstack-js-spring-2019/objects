const { Animal }   = require('../lib/animal.js');

describe('using a constructor function', () => {
  it('takes an animal constructor function and makes a new animal from it', () => {
    const newAnimal = new Animal('fluffy', 'dog');
    expect(newAnimal).toEqual({ name: 'fluffy', species: 'dog' });
  });
});

