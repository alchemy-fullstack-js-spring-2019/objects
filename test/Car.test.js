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
  
  it('Has makes static that returns an array of valic makes', () => {
    const expected = ['Honda', 'Ford', 'Saab', 'Jeep'];
    const makes = Car.makes();
    expect(makes).toEqual(expected);
  });
  
  it('Throws for invalid makes', () => {
    const expected = 'Error: Beep is not a valid make';
    expect(() => {
      new Car('Beep', 'Jump', 2018, 'Yellow');
    }).toThrowError(expected);
  });
});
