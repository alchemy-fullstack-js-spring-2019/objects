const { Colors } = require('../lib/Colors');

describe('Colors class', () => {
  let colors = null;

  beforeEach(() => {
    colors = new Colors();
  });
  
  it('has favorites property', () => {
    expect(colors.favorites).toEqual([]);
  });
  
  it('has addColor method that adds colors to favorites array', () => {
    expect(colors.addColor('red')).toEqual(['red']);
    expect(colors.addColor('blue')).toEqual(['red', 'blue']);
    expect(colors.addColor('yellow')).toEqual(['red', 'blue', 'yellow']);
  });

  it('has hasColor method that checks for colors in favorites array', () => {
    colors.addColor('red');
    expect(colors.hasColor('red')).toBeTruthy();

    colors.addColor('blue');
    expect(colors.hasColor('blue')).toBeTruthy();

    colors.addColor('yellow');
    expect(colors.hasColor('yellow')).toBeTruthy();
  });
});
