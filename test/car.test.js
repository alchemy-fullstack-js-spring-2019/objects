const { Car } = require('../lib/car');

describe('Car class', () => {
  it('has make property', () => {
    const car = new Car('BMW');
    expect(car.make).toEqual('BMW');
  });
});
