const Colors = require('../lib/Colors');

//var colors = new Colors('black');

describe('colors class with favorites param', () => {
  // it('has the expected favorite', () => {
  //   expect(colors.favorite).toEqual('black');
  // });
  let colors = null;
  beforeEach(() => {
    colors = new Colors;
  });
  it('has a list of colors', () => {
    expect(colors.favorite).toEqual([]);
  });
  // it('can check if favorite hasColor', () => {
  //   colors.addColor('red');
  //   expect(colors.hasColor('red')).toBeTruthy();
  //   expect(colors.hasColor('blue')).toBeFalsy();
  // });
});
