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
  it('hasColor method returns true if color has been added', () => {
    myColors.addColor('blue');
    expect(myColors.hasColor('blue')).toEqual(true);
  });
  it('hasColor method returns false if color has not been added', () => {
    expect(myColors.hasColor('red')).toEqual(false);
  });
});
