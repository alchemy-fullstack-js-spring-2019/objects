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

    it('has miles', () => {
      expect(carDetails.miles).toEqual(0);
    });
  });

  describe('driven miles', () => {
    it('increments the miles', () => {
      carDetails.drive(10);
      expect(carDetails.miles).toEqual(10);
      
      carDetails.drive(40);
      expect(carDetails.miles).toEqual(50);
    });
  });

  describe('makes', () => {
    it('shows available makes', () => {
      expect(Car.makes()).toEqual(['Ford', 'Toyota', 'Honda']);
    });
  });
});
