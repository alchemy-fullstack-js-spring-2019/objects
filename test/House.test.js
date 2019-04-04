const House = require('../lib/House');

describe('House class', () => {
  let house = null;

  beforeEach(() => {
    house = new House('Portland', 2, 5, 3);
  });

  it('has location property', () => {
    expect(house.location).toEqual('Portland');
  });

  it('has floors property', () => {
    expect(house.floors).toEqual(2);
  });

  it('has bedrooms property', () => {
    expect(house.bedrooms).toEqual(5);
  });

  it('has bathrooms property', () => {
    expect(house.bathrooms).toEqual(3);
  });

  it('has price method', () => {
    expect(house.price()).toEqual(1000000);
  });
});
