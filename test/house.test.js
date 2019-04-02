const { House } = require('../lib/house');

describe('House class', () => {
  it('has location property', () => {
    const house = new House('portland');
    expect(house.location).toEqual('portland');
  });

  it('has floors property', () => {
    const house = new House('portland', 3);
    expect(house.floors).toEqual(3);
  });

  it('has bedrooms property', () => {
    const house = new House('portland', 3, 5);
    expect(house.bedrooms).toEqual(5);
  });

  it('has bathrooms property', () => {
    const house = new House('portland', 3, 5, 4);
    expect(house.bathrooms).toEqual(4);
  });
});
