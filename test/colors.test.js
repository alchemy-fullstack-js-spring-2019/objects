const { Colors } = require('../lib/colors.js');

describe('messing with colors class', () => {
  it('makes a color class instance and is returned the favorites property as an empty array', () => {
    const newColors = new Colors();
    expect(newColors).toEqual({ favorites: [] });
  });
});
