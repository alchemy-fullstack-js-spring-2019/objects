const Colors = require('../lib/colors');

describe('Colors tests', () => {
  let colorDetails = null;
  beforeEach(() => {
    colorDetails = new Colors([]);
  });

  it('has an empty favorites property', () => {
    expect(colorDetails.favorites).toEqual([]);
  });



});
