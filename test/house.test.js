const { HouseClass } = require('../lib/house');

describe('HouseClass', () => {
  it('has a location', () => {
    const house = new HouseClass('city', 'wood', 4, 2);
    expect(house.location).toEqual('city');
    expect(house.floors).toEqual('wood');
    expect(house.bedrooms).toEqual(4);
    expect(house.bathrooms).toEqual(2);
  });
});
