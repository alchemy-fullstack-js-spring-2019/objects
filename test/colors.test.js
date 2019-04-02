const Color = require('../lib/colors');

describe('COLORS TESTS', () => {
  describe('Color', () => {
    let color = null;
    beforeEach(() => {
      color = new Color();
    });
    
    it('has list of favorite colors', () => {
      expect(color.favorites).toEqual([]);
    });

    it('add new favorite', () => {
      color.addColor('red');
      expect(color.favorites).toContainEqual('red');
    });

  });
});
