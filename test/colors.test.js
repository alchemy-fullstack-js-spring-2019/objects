const { Colors } = require('../lib/colors.js');

describe('messing with colors class', () => {
  it('makes a color class instance and is returned the favorites property as an empty array', () => {
    const newColors = new Colors();
    expect(newColors).toEqual({ favorites: [] });
  });
  it('uses the addColor method to add a color to the empty favorites array, returns that array', () => {
    const newColors = new Colors();
    expect(newColors.addColor('blue')).toEqual(['blue']);
  });
  it('uses the hasColor method on the Colors class to see if a color is in the faves array, returns true if it is', () => {
    const newColors = new Colors();
    newColors.addColor('blue');
    expect(newColors.hasColor('blue')).toBeTruthy();
  });
});
