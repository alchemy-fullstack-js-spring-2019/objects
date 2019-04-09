const {
  House
} = require('../lib/House');

describe('house class with location, floors, bedrooms, bathrooms, and price', () => {
  it('has a location, floors, bedrooms, and bathrooms and returns price', () => {
    const house = new House('Portland', 2, 2, 2);
    expect(house.price()).toEqual('This 2 floor, 2 bedroom, 2 bath house in Portland sells for $300000');
  });
});
