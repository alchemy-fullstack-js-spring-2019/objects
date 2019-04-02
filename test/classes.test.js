const { House } = require('../lib/classes');

describe('house class', () => {
  test('house class has location, floors, bedrooms, bathrooms', () => {
    const newHouse = new House('New York', 2, 2, 2);
    const string = newHouse.getPrice();
    expect(newHouse.location).toBe('New York');
    expect(newHouse.bedrooms).toEqual(2);
    expect(string).toEqual('$2000000');
  });
});
