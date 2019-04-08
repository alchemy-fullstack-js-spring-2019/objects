const Car = require('./car');

describe('car obj creator', () => {
  let car = null;
  beforeEach(() => {
    car = new Car('Toyota', 'iM', 2017, 'chartreuse');
  });

  it('has a make', () => {
    expect(car.make).toEqual('Toyota');
  });

  it('has a model', () => {
    expect(car.model).toEqual('iM');
  });

  it('has a year', () => {
    expect(car.year).toEqual(2017);
  });

  it('has a color', () => {
    expect(car.color).toEqual('chartreuse');
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


});
