const Car = require('../lib/car');

//add the beforeEach here, look at Ryan's code
//also need the incrementing miles thing

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
});
