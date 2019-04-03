const House = require('../lib/House');

describe('House class', () => {
  let result = null;
  beforeEach(() => {
    result = new House('Portland', 2, 4, 2.5);
  });

  it('House has location', () => {
    const expected = 'Portland';
    expect(result.location).toEqual(expected);
  });
  
  it('House has floors', () => {
    const expected = 2;
    expect(result.floors).toEqual(expected);
  });
  
  it('House has bedrooms', () => {
    const expected = 4;
    expect(result.bedrooms).toEqual(expected);
  });
  
  it('House has bathrooms', () => {
    const expected = 2.5;
    expect(result.bathrooms).toEqual(expected);
  });
  
  it('House has price method', () => {
    const expected = 20000;
    expect(result.price()).toEqual(expected);
  });
});
