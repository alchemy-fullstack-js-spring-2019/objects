const { House } = require('../lib/House.js');
describe('House Class properties test', () => {
  it('has the property: location', () => {
    const result = new House('Texas');
    expect(result.location).toEqual('Texas');
  });
  it('has the property: floors', () => {
    const result = new House('Texas', 3);
    expect(result.floors).toEqual(3);
  });
  it('has the property: bedrooms', () => {
    const result = new House('Texas', 3, 8);
    expect(result.bedrooms).toEqual(8);
  });
  it('has the property: bathrooms', () => {
    const result = new House('Texas', 3, 8, 2.5);
    expect(result.bathrooms).toEqual(2.5);
  });
});
