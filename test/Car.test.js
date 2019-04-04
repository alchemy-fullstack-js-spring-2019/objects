const Car = require('../lib/Car');

describe('Car class', () => {
  let car = null;

  beforeEach(() => {
    car = new Car('BMW', 'M4', 2019, 'black');
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

  it('has miles', () => {
    expect(car.miles).toEqual(0);
  });

  it('has drive method', () => {
    car.drive(10);
    expect(car.miles).toEqual(10);

    car.drive(50);
    expect(car.miles).toEqual(60);
  });

  it('has static makes method', () => {
    expect(Car.makes()).toEqual([
      'Audi',
      'BMW',
      'Honda',
      'Range Rover',
      'Toyota'
    ]);
  });
});
