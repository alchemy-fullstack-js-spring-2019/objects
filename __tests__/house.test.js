const {
  HouseClass
} = require('../lib/house');


describe('HouseClass', () => {
  it('has a location', () => {
    const house = new HouseClass('portland');
    expect(house.location).toEqual('portland');
  });
  it('has floors', () => {
    const house = new HouseClass('portland', 2);
    expect(house.floors).toEqual(2); 
  });
  it('has 3 bedrooms', () => {
    const house = new HouseClass('portland', 2, 3);
    expect(house.bedrooms).toEqual(3);
  });
  it('has two bedrooms', () => {
    const house = new HouseClass('portland', 2, 3, 2)
  });
});
