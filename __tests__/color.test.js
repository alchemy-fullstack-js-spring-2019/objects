const { FavoriteColors }
 = require('../lib/color');

describe('favorite color', () => {
  let colors = null;
  beforeEach(() => {
    colors = new FavoriteColors();
  }); 
    
  it('', () => {
    
    colors.favoriteColors('red');
    expect(colors.addColor).toEqual('red');
  });
});
