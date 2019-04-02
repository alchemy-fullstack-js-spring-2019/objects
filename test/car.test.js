const { Car } = require('../lib/car');

describe('Car class', () => {
  let car = null;

  beforeEach(() => {
    car = new Car('BMW', 'M4', 2019, 'black', 1000);
  });

  it('has make property', () => {
    expect(car.make).toEqual('BMW');
  });

  it('has model property', () => {
    expect(car.model).toEqual('M4');
  });

  it('has year property', () => {
    expect(car.year).toEqual(2019);
  });

  it('has color property', () => {
    expect(car.color).toEqual('black');
  });

  it('has drivenMiles property', () => {
    expect(car.drivenMiles).toEqual(1000);
  });

  it('has drive method', () => {
    expect(car.drive(3000)).toEqual(3000);
  });
});
