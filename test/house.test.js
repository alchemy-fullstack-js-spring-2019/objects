const { House } = require('../lib/house');

describe('CLASS TESTS', () => {
  describe('House', () => {
    //-- short-cut --\\
    // let house = null;
    // beforeEach(() => {
    //   house = new House('Beaverton', '3', '4', '2');
    // });
    // shouldn't have put numbers in string. no time to fix.
    it('location', () => {
      const house = new House('Beaverton', '3', '4', '2');
      expect(house.location).toEqual('Beaverton');
    });
    it('floors', () => {
      const house = new House('Beaverton', '3', '4', '2');
      expect(house.floors).toEqual('3');
    });
    it('bedrooms', () => {
      const house = new House('Beaverton', '3', '4', '2');
      expect(house.bedrooms).toEqual('4');
    });
    it('bathrooms', () => {
      const house = new House('Beaverton', '3', '4', '2');
      expect(house.bathrooms).toEqual('2');
    });
    it('price', () => {
      const house = new House('Beaverton', '3', '4', '2');
      expect(house.price()).toEqual(400000); 
    });
  });
});
