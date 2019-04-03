const Car = require('../lib/car');

describe('Car', () => {
  let car = null;
  beforeEach(() => {
    car = new Car('red', 'honda', 'civic');
  });

  it('has a color', () => {
    expect(car.color).toEqual('red');
  });
  
  it('has a make', () => {
    expect(car.make).toEqual('honda');
  });

  it('has a model', () => {
    expect(car.model).toEqual('civic');
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

  it('has a static method', () => {
    expect(Car.makes()).toEqual([
      'honda',
      'toyota',
      'ford',
      'dodge'
    ]);
    // it('throws when a car is made with an invalid make', () => {
    //   expect(() => {
    //     const myBadCar = new Car();
    //   });
  });
});
// });
