const House = require('../lib/House.js');

describe('House class', () => {
  it('creates a house object', () => {
    const expected = {
      location: 'Oregon',
      floors: 1,
      bedrooms: 3,
      bathrooms: 2.5,
      price() {
        return this.floors * this.bedrooms * this.bathrooms * 45000;
      }
    };
    const input = ['Oregon', 1, 3, 2.5];
    const result = new House(...input);

    expect(result.location).toEqual(expected.location);
    expect(result.floors).toEqual(expected.floors);
    expect(result.bedrooms).toEqual(expected.bedrooms);
    expect(result.bathrooms).toEqual(expected.bathrooms);
    expect(result.price()).toEqual(expected.price());
  });
});
