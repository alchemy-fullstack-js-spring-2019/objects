const { Car } = require('../lib/car.js');

describe('messing the a car class', () => {
  it('takes a car class and makes a new car with its own properties', () => {
    const newCar = new Car('hyundai', 'genesis', 2016, 'white');
    expect(newCar).toEqual({ make: 'hyundai', model: 'genesis', year: 2016, color: 'white', miles: 0 });
  });
  it('applies the drive method to a new car class and is returned how many miles the car has driven', () => {
    const newCar = new Car('hyundai', 'genesis', 2016, 'white');
    expect(newCar.drive(200)).toEqual(200);
  })
});
