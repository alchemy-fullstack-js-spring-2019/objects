const House = require('../lib/house');

describe('create a House with a class', () => {
  let house = null;

  beforeEach(() => {
    house = new House('Portland', 2, 5, 3);
  });

  it('create the location', () => {
    expect(house.location).toEqual('Portland');
  });

  it('create the floor', () => {
    expect(house.floor).toEqual(2);
  });

  it('create the bedroom', () => {
    expect(house.bedroom).toEqual(5);
  });

  it('create the bathroom', () => {
    expect(house.bathroom).toEqual(3);
  });

  it('has a price method', () => {
    expect(house.price()).toEqual(1000000);
  });

  it('has a colors static method', () => {
    expect(House.colors()).toEqual([
      'red',
      'blue',
      'green'
    ]);
  });
});
