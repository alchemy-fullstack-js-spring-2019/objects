const { Colors } = require('../lib/Colors');

describe('Colors class', () => {
  let colors = null;

  beforeEach(() => {
    colors = new Colors();
  });
  
  it('has a favorites property', () => {
    expect(colors.favorites).toEqual([]);
  });
});
