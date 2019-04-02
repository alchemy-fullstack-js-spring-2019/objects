const { Car } = require('../lib/car');

describe('Car class', () => {
  it('has make property', () => {
    const car = new Car('BMW');
    expect(car.make).toEqual('BMW');
  });

  it('has model property', () => {
    const car = new Car('BMW', 'M4');
    expect(car.model).toEqual('M4');
  });
});
