const { House } = require('../lib/house');

describe('House class', () => {
  it('has location property', () => {
    const house = new House('portland');
    expect(house.location).toEqual('portland');
  });
});
