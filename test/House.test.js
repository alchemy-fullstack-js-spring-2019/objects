const House = require('../lib/House');

describe('House', () => {
  // include these to eliminate "const = house"
  let house = null;
  beforeEach(() => {
    house = new House('Portland', 2, 4, 2);
  });

  it('lists location', () => {
    expect(house.location).toEqual('Portland');
  });
  
  it('lists floors', () => {
    expect(house.floors).toEqual(2);
  });

  it('lists bedrooms', () => {
    expect(house.bedrooms).toEqual(4);
  });

  it('lists bathrooms', () => {
    expect(house.bathrooms).toEqual(2);
  });

  it('lists expected price', () => {
    expect(house.price()).toEqual(800000);
  });
});
