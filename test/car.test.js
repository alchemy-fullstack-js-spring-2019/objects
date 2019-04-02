const Car = require('../lib/car');

describe('car constructor', () => {
  it('has a make', () => {
    const car = new Car('Honda');
    expect(car.make).toEqual('Honda');
  });
});
