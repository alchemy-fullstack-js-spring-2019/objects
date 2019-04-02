const House = require('../lib/house');

describe('House exists', () => {
  describe('has expected properties', () => {
    it('has a location', () => {
      const houseDetails = new House ('Memphis', 2, 2, 7);
      expect(houseDetails.location).toEqual('Memphis');
    });

    it('has 2 floors', () => {
      const houseDetails = new House ('Memphis', 2, 2, 7);
      expect(houseDetails.floors).toEqual(2);
    });

    it('has 2 br', () => {
      const houseDetails = new House ('Memphis', 2, 2, 7);
      expect(houseDetails.bedrooms).toEqual(2);
    });

    it('has 7 bath', () => {
      const houseDetails = new House ('Memphis', 2, 2, 7);
      expect(houseDetails.bathrooms).toEqual(7);
    });
  });

  describe('price method', () => {
    it('calculates a value', () => {
      const houseDetails = new House ('Memphis', 2, 2, 7);
      expect(houseDetails.price()).toEqual(130000);
    });
  });
});

