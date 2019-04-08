const Car = require('../lib/Car');

describe('Car', () => {
  let car = null;

  beforeEach(() => {
    car = new Car('BMW', 'M3', '2019', 'black');
  });

  it('has make', () => {
    expect(car.make).toEqual('BMW');
  });

  it('has model', () => {
    expect(car.model).toEqual('M3');
  });

  it('has year', () => {
    expect(car.year).toEqual('2019');
  });

  it('has color', () => {
    expect(car.color).toEqual('black');
  });

  it('has 0 miles', () => {
    expect(car.miles).toEqual(0);
  });

  it('add mileage', () => {
    car.drive(50);
    expect(car.miles).toEqual(50);
  });

  it('has a makes static method', () => {
    expect(Car.makes()).toEqual([
      'BMW',
      'Honda',
      'Ford',
      'Toyota'
    ]);
  });

  it('throws when a car is made with invalid make', () => {
    expect(() => {
      const myBadCar = new Car('red', 'notAMake', 'model')
    }).toThrow();
  });
});
