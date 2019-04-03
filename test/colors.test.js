const Colors = require('../lib/colors');

describe('Colors class', () => {

  let colors;

  beforeEach(() => {
    colors = new Colors();
  });

  it('has a favorites property', () => {
    expect(colors.favorites).toEqual([]);
  });

  // it('has addColor ')

  // it('hasColor takes a color parameter', () => {
  //   hasColor('green');
    // expect(colors.hasColor).toEqual('green')
  // });
});
