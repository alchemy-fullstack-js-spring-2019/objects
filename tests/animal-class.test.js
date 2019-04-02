const Animal = require('../lib/animal-class');
const cat = new Animal('Steve', 'cat'); 

describe('animal class', () => {
  it('returns a string when speak is called on the object', () => {
    expect(cat.speak()).toBe('Hello');
  });
  it('checks the animal has a name', () => {
    expect(cat.name).toBe('Steve');
  });
  it('checks the animal has a species', () => {
    expect(cat.species).toBe('cat');
  });
});
