const House = require('./House');

describe('house obj creator', () => {
  describe('HouseClass', () => {
    it('has a location', () => {
      const house = new House ('Portland');
      expect(house.location).toEqual('Portland');
    });
    it('has a floors', () => {
      const house = new House ('Portland', 4);
      expect(house.floors).toEqual(4);
    });
    it('has bedrooms', () => {
      const house = new House('Portland', 4, 5);
      expect(house.bedrooms).toEqual(5);
    });
  });
  
});
