const { Car } = require('../lib/car');

describe('CAR TESTS', () => {
  describe('Car', () => {
    let car = null;
    beforeEach(() => {
      car = new Car('Honda', 'Civic', 2000, 'red');
    });
    it('make', () => {
      expect(car.make).toEqual('Honda');
    });
    it('model', () => {
      expect(car.model).toEqual('Civic');
    });
    it('year', () => {
      expect(car.year).toEqual(2000);
    });
    it('color', () => {
      expect(car.color).toEqual('red');
    });
    it('can be driven', () => {
      car.drive(20);
      expect(car.miles).toEqual(20);

      car.drive(50);
      expect(car.miles).toEqual(70);
    });
  });
});
