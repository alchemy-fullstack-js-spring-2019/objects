const Colors = require('./Colors');

describe('colors class tests', () => {
  let MyColors = null;
  beforeEach(() => {
    MyColors = new Colors();
  });
  it('add color adds to favorites', ()=> {
    MyColors.addColor('blue');
    expect(MyColors.favorites).toEqual(['blue']);
  });
  it('has color checks favorites, returns true', ()=> {
    MyColors.addColor('blue');
    expect(MyColors.hasColor('blue')).toBeTruthy();
  });
  it('has color checks favorites, returns false', ()=> {
    expect(MyColors.hasColor('blue')).toEqual(false);
  });

});
