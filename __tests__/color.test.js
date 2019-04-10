const { FavoriteColors }
 = require('../lib/color');

describe('favorite color', () => {
  let colors = null;
  beforeEach(() => {
    colors = new FavoriteColors();
  }); 

  it('is a list of favorite colors', () => {
    expect(colors.favorite).toEqual([]);
  });
    
  it('can add color to a list of favorite colors', () => {
    
    colors.addColor('red');
    expect(colors.addColor).toEqual('red');
  });

  it('can check has a favorite color', () => {
    colors.addColor('blue');
    expect(colors.hasColor('blue')).toBeTruthy();
    expect(colors.hasColors('green')).toBeFalsy();
  });

});
