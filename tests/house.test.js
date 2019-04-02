const House = require('../lib/house');
const myHouse = new House('Portland', 2, 4, 2);

describe('house class', () => {
  it('returns the house location', () => {
    expect(myHouse.location).toBe('Portland');
  });
  it('returns the number of floors in the house', () => {
    expect(myHouse.floors).toBe(2);
  });
  it('returns the number of bedrooms in the house', () => {
    expect(myHouse.bedrooms).toBe(4);
  });
  it('returns the number of bathrooms in the house', () => {
    expect(myHouse.bathrooms).toBe(2);
  });
});
