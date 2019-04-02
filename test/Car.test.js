const {
  CarClass
} = require('../lib/Car');

describe('CarClass', () => {
  it('has a make', () => {
    const car = new CarClass('Tesla');
    expect(car.make).toEqual('Tesla');
  });

  it('has a model', () => {
    const car = new CarClass('Tesla', 'Model X');
    expect(car.model).toEqual('Model X');
  });

  it('has a year', () => {
    const car = new CarClass('Tesla, Model X', 2018);
    expect(car.year).toEqual(2018);
  });
});
