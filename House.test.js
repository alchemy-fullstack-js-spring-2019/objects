const House = require('./House');

describe('house obj creator', () => {
  let house = null;

  beforeEach(() => {
    house = new House('Portland', 2, 3, 4);
  });

  it('has a location', () => {
    expect(house.location).toEqual('Portland');
  });
  it('has a floors', () => {
    expect(house.floors).toEqual(2);
  });
  it('has bedrooms', () => {
    expect(house.bedrooms).toEqual(3);
  });
  it('has bathrooms', () => {
    expect(house.bathrooms).toEqual(4);
  });
  it('has a price method', () => {
    expect(house.price()).toEqual(900000);
  });
});
