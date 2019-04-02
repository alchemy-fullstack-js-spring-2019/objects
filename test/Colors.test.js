const {
  Colors
} = require('../lib/Colors');

describe('Colors', () => {
  let colors = null;

  beforeEach(() => {
    colors = new Colors();
  });

  it('has favorites property', () => {
    expect(colors.favorites).toEqual([]);
  });

  it('can add new favorites with color', () => {
    colors.addColor('red');
    expect(colors.favorites).toContainEqual('red');
  });

  it('can check if favorites hasColor', () => {
    colors.addColor('red');
    expect(colors.hasColor('red')).toBeTruthy();
    expect(colors.hasColor('blue')).toBeFalsy();
  });
});
