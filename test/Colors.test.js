const Color = require('../lib/Colors');

describe('Color Class', () => {
  it('Has a favorites property initialized as an empty array', () => {
    const expected = [];

    const result = new Color;

    expect(result.favorites).toEqual(expected);
  });
});
