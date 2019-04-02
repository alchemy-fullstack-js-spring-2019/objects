const Car = require('../lib/Car');

describe('Car Class', () => {
  it('Has make, model, year, color, and miles', () => {
    const result = new Car('Honda', 'Accord', 2018, 'Black');

    expect(result.make).toEqual('Honda');
    expect(result.model).toEqual('Accord');
    expect(result.year).toEqual(2018);
    expect(result.color).toEqual('Black');
    expect(result.miles).toEqual(0);
  });
  
  it('Has drive function that updates miles', () => {
    const result = new Car('Honda', 'Accord', 2018, 'Black');
    result.drive(100);
    result.drive(10);
    expect(result.miles).toEqual(110);
  });
});
