const { Colors } = require('../lib/Colors.js');

describe('Color class', () => {
  let myColors = null;
  beforeEach(() => {
    myColors = new Colors();
  });
  it('has an empty favorites property', () => {
    expect(myColors.favorites).toEqual([]);
  });
  it('has an addColor method', () => {
    myColors.addColor('red');
    expect(myColors.favorites).toEqual(['red']);
    myColors.addColor('blue');
    expect(myColors.favorites).toEqual(['red', 'blue']);
  });
});
