const Car = require('../lib/car');

describe('car constructor', () => {

  let car = null;
  beforeEach(() => {
    car = new Car('Honda', 'CRV', 2012, 'red');
  });

  it('has a make', () => {
    expect(car.make).toEqual('Honda');
  });

  it('has a model', () => {
    expect(car.model).toEqual('CRV');
  });

  it('has a model', () => {
    expect(car.year).toEqual(2012);
  });

  it('has a model', () => {
    expect(car.color).toEqual('red');
  }); 

  it('has miles', () => {
    expect(car.miles).toEqual(0);
  });

  it('can be driven', () => {
    car.drive(10);
    expect(car.miles).toEqual(10);
    
    car.drive(50);
    expect(car.miles).toEqual(60);
  });

  it('has a makes-static method', () => {
    expect(Car.makes()).toEqual([
      'Honda',
      'toyota',
      'ford',
      'dodge'
    ]);
  });
  it('throws error when car is made w/invalid make', () => {
    expect(() => {
      /*eslint-disable-next-line*/
      const badCar = new Car('datsun', 'CRV', 2012, 'red');
    }).toThrow();
  });
});
