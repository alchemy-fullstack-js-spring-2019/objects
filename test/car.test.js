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

  it('has year property', () => {
    const car = new Car('BMW', 'M4', 2019);
    expect(car.year).toEqual(2019);
  });

  it('has color property', () => {
    const car = new Car('BMW', 'M4', 2019, 'black');
    expect(car.color).toEqual('black');
  });
});
