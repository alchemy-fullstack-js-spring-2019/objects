const Color = require('../lib/Colors');

describe('Color Class', () => {
  it('Has a favorites property initialized as an empty array', () => {
    const expected = [];
    const result = new Color;
    expect(result.favorites).toEqual(expected);
  });
  
  it('Has a addColor method that adds colors to favorites', () => {
    const expected = ['blue', 'red'];
    const result = new Color;
    result.addColor('blue');
    result.addColor('red');
    expect(result.favorites).toEqual(expected);
    expect(result.favorites).toContainEqual('red');
  });
  
  it('Has a hasColor method that checks for colors in favorites', () => {
    const result = new Color;
    result.addColor('blue');
    result.addColor('red');
    expect(result.hasColor('blue')).toEqual(true);
    expect(result.hasColor('blue')).toBeTruthy();
    expect(result.hasColor('green')).toEqual(false);
    expect(result.hasColor('green')).toBeFalsy();
  });
});
