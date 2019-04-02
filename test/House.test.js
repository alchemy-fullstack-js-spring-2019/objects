const {
  House
} = require('../lib/House');

describe('house class with location, floors, bedrooms, bathrooms, and price', () => {
  var house = new House('Montavilla', 2, 3, 1.5);
  it('has a location', () => {
    expect(house.location).toEqual('Montavilla');
  });
  // FIX ERRORS
  // it('returns a price calculated according to the # of bedrooms', () => {
  //   var house = new House('Montavilla', 2, 3, 1.5);
  //   expect(house.price()).toEqual('This 2 floor, 3 bedroom, 1.5 bath house in Montavilla sells for $225000');
  // });
  // it('has a location, floors, bedrooms, and bathrooms', () => {
  //   const house = new House('Portland', 2, 2, 2);
  //   expect(house.price).toEqual('This 2 floor, 2 bedroom, 2 bath house in Portland sells for $ {this.makePrice}');
  // });
});
