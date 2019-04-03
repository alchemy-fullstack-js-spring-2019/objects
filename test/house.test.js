const { House } = require('../lib/house.js');

describe('messing with classes', () => {
  //let house = null;
  //beforeEach(() => {
  //house = new House('miami', 2, 4, 5)
  //}
  //this allows you to omit line 6 in each it
  //it says before each it, run this
  //there is also an afterEach
  

  it('takes a house class and makes a new house', () => {
    const newHouse = new House('miami', 2, 4, 5);
    expect(newHouse).toEqual({ location: 'miami', floors: 2, bedrooms: 4, bathrooms: 5 });
  });
  it('calls a new house function and expects to receive price per month with the price() method', () => {
    const newHouse = new House('miami', 2, 4, 5);
    expect(newHouse.price()).toEqual('Price per month is: 2200');
  });
});
