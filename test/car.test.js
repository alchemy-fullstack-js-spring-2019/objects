const Car = require('../lib/car');

describe('car', () => {
  let carDetails = null;
  beforeEach(() => {
    carDetails = new Car ('Toyota', 'LiteAce', 1992, 'Blue');
  });
  describe('has expected properties', () => {

    it('has a make', () => {
      expect(carDetails.make).toEqual('Toyota');
    });

    it('has a model', () => {
      expect(carDetails.model).toEqual('LiteAce');
    });

    it('has a year', () => {
      expect(carDetails.year).toEqual(1992);
    });

    it('has a color', () => {
      expect(carDetails.color).toEqual('Blue');
    });
  });

  describe('driven miles', () => {
    it('increments the miles', () => {
      expect(carDetails.drive(20)).toEqual(20);
    });
  });

  describe('makes', () => {
    it('shows available makes', () => {
      expect(Car.makes()).toEqual(['Ford', 'Toyota', 'Honda']);
    });
  });
});
