const Colors = require('../lib/Colors');

describe('colors class with favorites param', () => {
  let colors = null;
  beforeEach(() => {
    colors = new Colors;
  });
  it('has a list of colors', () => {
    expect(colors.favorite).toEqual([]);
  });
  it('can add a color and check if favorite hasColor', () => {
    colors.addColor('red');
    expect(colors.hasColor('red')).toBeTruthy();
    expect(colors.hasColor('blue')).toBeFalsy();
  });
});
