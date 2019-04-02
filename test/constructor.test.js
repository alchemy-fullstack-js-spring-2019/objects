const AnimalConstructor = require('../lib/constructor');

describe('animal constructor', () => {
  it('creates animal steve, tiger', () => {
    expect(new AnimalConstructor('steve', 'tiger')).toEqual(
      {
        name: 'steve',
        species: 'tiger',
      }
    );
  });
});
