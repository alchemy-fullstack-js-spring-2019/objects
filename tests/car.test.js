const Car = require('../lib/car');
const myCar = new Car('Subaru', 'Outback', 2013, 'black', 40000);

describe('car class', () => {
  it('returns the make of the car', () => {
    expect(myCar.make).toBe('Subaru');
  });
  it('returns the model of the car', () => {
    expect(myCar.model).toBe('Outback');
  });
  it('returns the year of the car', () => {
    expect(myCar.year).toBe(2013);
  });
  it('returns the color of the car', () => {
    expect(myCar.color).toBe('black');
  });
  it('returns the miles of the car', () => {
    expect(myCar.miles).toBe(40000);
  });
  it('increments the miles property by drivenMiles', () => {
    expect(myCar.drive(5000)).toBe(45000);
  });
  it('increments the miles another 50 with drivenMiles', () => {
    expect(myCar.drive(50)).toBe(45050);
  });
  it('returns a list of different makes when makes() is called', () => {
    expect(Car.makes()).toEqual([
      'Ford',
      'Subaru',
      'Toyota',
      'Chevrolet',
      'Porshe'
    ]);
  });
  it('throws an error if make isnt in makes list', () => {
    expect(() => {
      const myCar = new Car('Subaruu', 'Outback', 2013, 'black', 40000);
      myCar.make;
    }).toThrow();
  });
});
