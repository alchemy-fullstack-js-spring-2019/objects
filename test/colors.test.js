const Colors = require('../lib/colors');

describe('Colors tests', () => {
  let colorDetails = null;
  beforeEach(() => {
    colorDetails = new Colors();
  });

  it('has an empty favorites property', () => {
    expect(colorDetails.favorites).toEqual([]);
  });
  
  describe('fav method', () => {
    it('pass colors into favorites', () => {
      colorDetails.addColor('green');
      expect(colorDetails.favorites).toEqual(['green']);
      
      colorDetails.addColor('yellow');
      expect(colorDetails.favorites).toEqual(['green', 'yellow']);
    });
  });
  
  describe('has colors', () => {
    it('is on list', () => {
      colorDetails.addColor('yellow');

      expect(colorDetails.hasColor('yellow')).toBeTruthy();
      expect(colorDetails.hasColor('purple')).toBeFalsy();
    });
  });

});
