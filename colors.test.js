const Colors = require('./colors');

describe('colors', () => {
  let colors = null;
  beforeEach(() => {
    colors = new Colors();
  });

  it('has favorites list', () => {
    expect(colors.favorites).toEqual([]);
  });

  it('can add new favorites with addColor', () => {
    colors.addColor('mauve');
    expect(colors.favorites).toContainEqual('mauve');
  });
  
  it('can check if favorites hasColor', () => {
    colors.addColor('mauve');
    expect(colors.hasColor('mauve')).toBeTruthy();
    expect(colors.hasColor('blue')).toBeFalsy();
  });
});

