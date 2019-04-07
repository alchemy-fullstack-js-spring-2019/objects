const Car = require('../lib/Car');

describe('Car', () => {
  let car = null;
  beforeEach(() => {
    car = new Car('Tesla', 'Model X', '2018', 'silver');
  });

  it('has a make', () => {
    expect(car.make).toEqual('Tesla');
  });
  
  it('has a model', () => {
    expect(car.model).toEqual('Model X');
  });
  
  it('has a year', () => {
    expect(car.year).toEqual('2018');
  });

  it('has a color', () => {
    expect(car.color).toEqual('silver');
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

  it('has a makes static method', () => {
    expect(Car.makes()).toEqual([
      'Tesla',
      'Toyota',
      'Honda',
      'Dodge'
    ]);
  });
});
