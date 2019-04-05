const { HouseCreate } = require('../lib/house');

describe('house class function', () => {
  it('house location', () => {
    const house1 = new HouseCreate('portland', '3', '5', '4');
    expect(house1.location).toEqual('portland');
  });
  it('house floors', () => {
    const house1 = new HouseCreate('portland', '3', '5', '4');
    expect(house1.floors).toEqual('3');
  });
  it('house bedrooms', () => {
    const house1 = new HouseCreate('portland', '3', '5', '4');
    expect(house1.bedrooms).toEqual('5');
  });
  it('house bathrooms', () => {
    const house1 = new HouseCreate('portland', '3', '5', '4');
    expect(house1.bathrooms).toEqual('4');
  });
  
  it('price based on floors', () => {
    const house1 = new HouseCreate('portland', '3', '5', '4');
    const cost = 120000;
    expect(house1.price()).toEqual(cost);
  });

});
