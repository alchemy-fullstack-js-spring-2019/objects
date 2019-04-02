const Colors = require('../lib/Car');

var colors = new Colors('black');

describe('colors class with favorites param', () => {
  it('has the expected favorite', () => {
    expect(colors.favorite).toEqual('black');
  });
});
