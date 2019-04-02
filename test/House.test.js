const {
  House
} = require('../lib/House');

describe('HouseClass', () => {
  it('has a location property', () => {
    const house = new House('portland');
    expect(house.location).toEqual('portland');
  });

  it('has floors', () => {
    const house = new House('Portland', 'wood');
    expect(house.floors).toEqual('wood');
  });
});
