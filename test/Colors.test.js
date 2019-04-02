const Colors = require('../lib/Colors.js');

describe('Colors class', () => {
  let favoriteColors;
  beforeEach(() => { favoriteColors = new Colors(); });

  it('creates a favorite colors object', () => {
    const expected = {
      favorites: []
    };

    expect(favoriteColors.favorites).toEqual(expected.favorites);
  });

  it('add colors to favorites', () => {
    const expected = ['blue', 'red'];
    const input = ['blue', 'red'];
    favoriteColors.addColor(...input);
  
    expect(favoriteColors.favorites).toEqual(expected);
  });

  it('checks if a color exists in favorites', () => {
    const expected = true;
    const input = 'red';
    favoriteColors.addColor('red');
    const result = favoriteColors.hasColor(input);
  
    expect(result).toEqual(expected);
  });
});
