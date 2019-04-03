const Colors = require('../lib/Colors');

describe('Colors', () => {
  let colors = null;
  beforeEach(() => {
    colors = new Colors();
  });

  it('has favorite colors', () => {
    expect(colors.favorites).toEqual([]);
  });

  it('can add to favorite colors', () => {
    colors.addColor('red');
    expect(colors.favorites).toContainEqual('red');
  });

  it('can check for favorite colors', () => {
    colors.addColor('blue');
    expect(colors.hasColor('blue')).toBeTruthy();
    expect(colors.hasColor('red')).toBeFalsy();
  });
});
