const Car = require('./Car');

describe('car class tests', () => {
  it('has make property', () => {
    const Bessey = new Car('Chevrolet');
    expect(Bessey.make).toEqual('Chevrolet');
  });
  it('has model property', () => {
    const Bessey = new Car('Chevrolet', 'Impala');
    expect(Bessey.model).toEqual('Impala');
  });
  it('has year property', () => {
    const Bessey = new Car('Chevrolet', 'Impala', 1964);
    expect(Bessey.year).toEqual(1964);
  });
  it('has color property with input', () => {
    const Bessey = new Car('Chevrolet', 'Impala', 1964, 'red');
    expect(Bessey.color).toEqual('red');
  });
  it('has miles property no input', () => {
    const Bessey = new Car('Chevrolet', 'Impala', 1964, 'red');
    expect(Bessey.miles).toEqual(0);
  });
  it('has miles property with input', () => {
    const Bessey = new Car('Chevrolet', 'Impala', 1964, 'red', 100000);
    expect(Bessey.miles).toEqual(100000);
  });
  it('has a drive method that accepts driven miles', () => {
    const Bessey = new Car('Chevrolet', 'Impala', 1964, 'red');
    Bessey.drive(50000);
    expect(Bessey.miles).toEqual(50000);
  });
  it('has a static method that returns acceptable makes', () => {
    expect(Car.makes()).toEqual(['Chevrolet', 'Cadillac', 'Ford']);
  });
  it('throws an error when you add a make that isnt in the static makes', () => {
    expect(() => {
      const BadCar = new Car('bad value', 'irrelevant', 1600, 'red');
    }).toThrow();
  });
});

