const Animal = require('../lib/animal-constructor');
const cat = new Animal('Charles', 'cat');

describe('animal constructor', () => {
  it('calls speak method on animal and returns string', () => {
    expect(cat.speak()).toBe('Hello');
  });
  it('checks the animal has a name', () => {
    expect(cat.name).toBe('Charles');
  });
  it('checks the animal has a species', () => {
    expect(cat.species).toBe('cat');
  });
});
