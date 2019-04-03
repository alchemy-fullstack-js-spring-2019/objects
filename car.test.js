const Car = require('./car');

describe('car obj creator', () => {
  it('has a make', () => {
    const car = new Car ('Toyota');
    expect(car.make).toEqual('Toyota');
  });
  it('has a model', () => {
    const car = new Car ('Toyota', 'iM');
    expect(car.model).toEqual('iM');
  });
  it('has a year', () => {
    const car = new Car ('Toyota', 'iM', 2017);
    expect(car.year).toEqual(2017);
  });
  it('has a color', () => {
    const car = new Car ('Toyota', 'iM', 2017, 'chartreuse');
    expect(car.color).toEqual('chartreuse');
  });
  it('has miles', () => {
    const car = new Car ('Toyota', 'iM', 2017, 'chartreuse', 0);
    expect(car.miles).toEqual(0);
  });
  // it('can be driven', () => {
  //   expect(car.miles)
  // })


});
