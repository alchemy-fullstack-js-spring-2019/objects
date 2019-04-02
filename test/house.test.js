const House = require('../lib/House');

describe('House class', () => {
  it('House has location', () => {
    const expected = 'Portland';

    const result = new House('Portland');

    expect(result.location).toEqual(expected);
  });
  
  it('House has floors', () => {
    const expected = 2;

    const result = new House('Portland', 2);

    expect(result.floors).toEqual(expected);
  });
  
  it('House has bedrooms', () => {
    const expected = 4;

    const result = new House('Portland', 2, 4);

    expect(result.bedrooms).toEqual(expected);
  });
  
  it('House has bathrooms', () => {
    const expected = 2.5;

    const result = new House('Portland', 2, 4, 2.5);

    expect(result.bathrooms).toEqual(expected);
  });
  
  it('House has price method', () => {
    const expected = 20000;

    const result = new House('Portland', 2, 4, 2.5);

    expect(result.price()).toEqual(expected);
  });
});
