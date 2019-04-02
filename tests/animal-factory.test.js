const Animal = require('../lib/animal-factory');
const cat = new Animal('Sally', 'cat');

describe('animal facotry', () => {
  it('returns a string when speak is called on the object', () => {
    expect(cat.speak()).toBe('Hello');
  });
});
