const Car = require('../lib/car');


describe('car constructor', () => {
  it('has a make', () => {
    const car = new Car('Honda');
    expect(car.make).toEqual('Honda');
  });
  it('has a model', () => {
    const car = new Car('Honda', 'CRV');
    expect(car.model).toEqual('CRV');
  });
  it('has a model', () => {
    const car = new Car('Honda', 'CRV', 2012);
    expect(car.year).toEqual(2012);
  });
  it('has a model', () => {
    const car = new Car('Honda', 'CRV', 2012, 'red');
    expect(car.color).toEqual('red');
  }); 
  it('has miles', () => {
    const car = new Car('Honda', 'CRV', 2012, 'red');
    expect(car.miles).toEqual(0);
  });
  it('can be driven', () => {
    const car = new Car('Honda', 'CRV', 2012, 'red');
    car.drive(10);
    expect(car.miles).toEqual(10);
    
    car.drive(50);
    expect(car.miles).toEqual(60);
  });
  it('has a makes-static method', () => {
    const car = new Car('Honda', 'CRV', 2012, 'red');
    expect(Car.makes()).toEqual([
      'Honda',
      'toyota',
      'ford',
      'dodge'
    ]);
  });
  it('throws error when car is made w/invalid make', () => {
    expect(() => {
      const badCar = new Car('datsun', 'CRV', 2012, 'red');
    }).toThrow();
  });
});
