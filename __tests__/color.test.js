const {
  favoriteColors
} = require('../lib/color');

describe('has a list of favorite colors', () => {
  let colors = null;
  beforeEach(() => {
    colors = new colors();
  }); 
    
  it('', () => {
    
    color.favoriteColors('red');
    expect(color.addColor).toEqual('red');
  });
});
