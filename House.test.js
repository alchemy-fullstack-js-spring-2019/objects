const House = require('./House');

describe('house class tests', () => {
  it('has a location', () => {
    const MyHouse = new House('Portland');
    expect(MyHouse.location).toEqual('Portland');
  });
  it('has floors', () => {
    const MyHouse = new House('Portland', 4);
    expect(MyHouse.floors).toEqual(4);
  });
  it('has bedrooms', () => {
    const MyHouse = new House('Portland', 4, 5);
    expect(MyHouse.bedrooms).toEqual(5);
  });
  it('has bathrooms', () => {
    const MyHouse = new House('Portland', 4, 5, 4);
    expect(MyHouse.bathrooms).toEqual(4);
  });
  it('has a price method', () => {
    const MyHouse = new House('Portland', 4, 5, 4);
    expect(MyHouse.price()).toEqual(470000);
  });
  
});
