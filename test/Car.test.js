const Car = require('../lib/Car.js');

describe('Car class', () => {
  let myCar;
  beforeEach(() => {
    myCar = new Car('Nissan', 'Altima', 2009, 'blue');
  });

  it('creates a car object ', () => {
    const expected = {
      make: 'Nissan',
      model: 'Altima',
      year: 2009,
      color: 'blue',
      miles: 0,
      drive(driven) {
        this.miles += driven;
      }
    };
    const result = myCar;
    expect(result.make).toEqual(expected.make);
    expect(result.model).toEqual(expected.model);
    expect(result.year).toEqual(expected.year);
    expect(result.color).toEqual(expected.color);
    expect(result.miles).toEqual(expected.miles);
    result.drive(55000);
    expect(result.miles).toEqual(55000);
  });

  it('returns an updated amount of miles after drive method', () => {
    const expected = 55000;
    const input = 55000;
    const result = myCar;
    result.drive(input);
    expect(result.miles).toEqual(expected);
  });

  it('returns an array of makes', () => {
    const expected = [
      'Honda',
      'Nissan',
      'Toyota'
    ];
    const result = Car.makes();
  
    expect(result).toEqual(expected);
  });
});

describe('Throw test', () => {
  it('throws on invalid car make', () => {
    expect(() => (new Car('BMW', 'Altima', 2009, 'blue'))).toThrow();
  });
});
