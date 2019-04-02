const Animal = require('../lib/animal-constructor');
const cat = new Animal('Charles', 'cat');

describe('animal constructor', () => {
  it('calls speak method on animal and returns string', () => {
    expect(cat.speak()).toBe('Hello');
  });
});
