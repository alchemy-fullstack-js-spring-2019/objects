const Colors = require('../lib/Colors');

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
    expect(colors.hasColor('blue')).toBeFalsy();
  });
});
