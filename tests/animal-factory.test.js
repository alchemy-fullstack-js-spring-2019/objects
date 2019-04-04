const Animal = require('../lib/animal-factory');
const cat = new Animal('Sally', 'cat');

describe('animal facotry', () => {
  it('returns a string when speak is called on the object', () => {
    expect(cat.speak()).toBe('Hello');
  });
  it('checks the animal has a name', () => {
    expect(cat.name).toBe('Sally');
  });
  it('checks the animal has a species', () => {
    expect(cat.species).toBe('cat');
  });
});
