const Colors = require('../lib/colors');
const myColors = new Colors('blue');

describe('colors class', () => {
  it('returns the favorites array', () => {
    expect(myColors.favorites).toEqual(['blue']);
  });
  it('favorites displays ["blue", "red"] when addColor(red) is called', () => {
    myColors.addColor('red');
    expect(myColors.favorites).toEqual(['blue', 'red']);
  });
  it('hasColor displays false when asked if green is in favorites array', () => {
    expect(myColors.hasColor('green')).toBe(false);
  });
  it('hasColor displays truen when asked if red is in favorites array', () => {
    expect(myColors.hasColor('red')).toBe(true);
  });
});
