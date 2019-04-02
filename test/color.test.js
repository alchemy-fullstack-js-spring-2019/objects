const ColorCreate = require('../lib/color');

describe('color funciton', () => {
  it('adding to favorites', () => {
    const jaredsColors = new ColorCreate();
    expect(jaredsColors.addFav('blue')).toEqual(['blue']);
    expect(jaredsColors.addFav('green')).toEqual(['blue', 'green']);
  });
  it('check for colors in favorites', () => {
    const jaredsColors = new ColorCreate();
    jaredsColors.addFav('blue');
    jaredsColors.addFav('green');
    expect(jaredsColors.hasColor('green')).toEqual(true);
  });
  it('check for colors in favorites', () => {
    const jaredsColors = new ColorCreate();
    jaredsColors.addFav('blue');
    jaredsColors.addFav('green');
    expect(jaredsColors.hasColor('red')).toEqual(false);
  });

});
