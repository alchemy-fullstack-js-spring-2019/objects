const Colors = require('../lib/colors');

describe('Color Class', () => {
  let colors = null;
  beforeEach(() => {
    colors = new Colors();
  });

  it('Favorites List', () => {
    expect(colors.favorites).toEqual([]);
  });

  it('Add favorites', () => {
    colors.addColor('rainbow');
    expect(colors.favorites).toContainEqual('rainbow');
  });

  it('Check if hasColor', () => {
    colors.addColor('rainbow');
    expect(colors.hasColor('rainbow')).toBeTruthy();
    expect(colors.hasColor('purple')).toBeFalsy();
  });
});
