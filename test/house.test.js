const { House } = require('../lib/house.js');

describe('messing with classes', () => {
  it('takes a house class and makes a new house', () => {
    const newHouse = new House('miami', 2, 4, 5);
    expect(newHouse).toEqual({ location: 'miami', floors: 2, bedrooms: 4, bathrooms: 5 });
  });
  it('calls a new house function and expects to receive price per month with the price() method', () => {
    const newHouse = new House('miami', 2, 4, 5);
    expect(newHouse.price()).toEqual('Price per month is: 2200');
  });
});
