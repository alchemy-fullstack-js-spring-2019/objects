const House = require('../lib/house');

describe('house class 1', () => {
  const myHouse = new House('Portland', 2, 4, 2);
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
  it('returns the price of the house', () => {
    expect(myHouse.price()).toBe('This lovely Portland home costs 45.30.');
  });
});

describe('house class 2', () => {
  const myHouse = new House('Santa Fe', 4, 12, 6);
  it('returns the house location', () => {
    expect(myHouse.location).toBe('Santa Fe');
  });
  it('returns the number of floors in the house', () => {
    expect(myHouse.floors).toBe(4);
  });
  it('returns the number of bedrooms in the house', () => {
    expect(myHouse.bedrooms).toBe(12);
  });
  it('returns the number of bathrooms in the house', () => {
    expect(myHouse.bathrooms).toBe(6);
  });
  it('returns the price of the house', () => {
    expect(myHouse.price()).toBe('This lovely Santa Fe home costs 45.30.');
  });
});
