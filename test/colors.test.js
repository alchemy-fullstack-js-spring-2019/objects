const Colors = require('../lib/colors');

describe('Colors class', () => {

  let colors = null;

  beforeEach(() => {
    colors = new Colors();
  });

  it('has a favorites property', () => {
    expect(colors.favorites).toEqual([]);
  });

  it('can add new faves with addColor', () => {
    colors.addColor('red');
    expect(colors.favorites).toContainEqual('red');
  });

  it('can check if favorites hasColor', () => {
    colors.addColor('red');
    expect(colors.hasColor('red')).toBeTruthy();
    expect(colors.hasColor('blue')).toBeFalsy();
  });
});
