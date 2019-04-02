const { House } = require('../lib/classes');
const { Car } = require('../lib/classes');
const { Color } = require('../lib/classes');

describe('house class', () => {
  test('house class has location, floors, bedrooms, bathrooms', () => {
    const newHouse = new House('New York', 2, 2, 2);
    const string = newHouse.getPrice();
    expect(newHouse.location).toBe('New York');
    expect(newHouse.bedrooms).toEqual(2);
    expect(string).toEqual('$2,000,000');
  });
});


describe('car', () => {
  test('car class takes make, model, year, color, miles with miles set at zero', () => {
    const newCar = new Car('Subaru', 'Brat', '1979', 'blue');
    expect(newCar.miles).toEqual(0);
    expect(newCar.make).toEqual('Subaru');
  });

  test('drive increments miles by miles input', () => {
    const newCar = new Car('Subaru', 'Brat', '1979', 'blue');
    expect(newCar.drive(50)).toEqual(50);
  });

  test('makes returns array of car makes', () => {
    expect(Car.makes()).toEqual(['Honda', 'Subaru', 'Toyota', 'Mitsubishi', 'Fiat', 'Nissan']);
  });

  test('if make input does not match array, throw error', () => {
    expect(() => {
      new Car('Ford', 'Brat', '1979', 'blue');
    }).toThrow('ERROR');
  });

});

describe('colors!', () => {
  test('color constructor has favorites empty array', () => {
    const newColor = new Color;
    expect(newColor.favorites).toEqual([]);
  });

  test('addColor adds color to favorites', () => {
    const newColor = new Color;
    newColor.addColor('blue');
    expect(newColor.favorites).toEqual(['blue']);
  });

  test('addColor adds color to favorites', () => {
    const newColor = new Color;
    newColor.addColor('blue');
    newColor.addColor('red');
    expect(newColor.hasColor('blue')).toEqual(true);
  });

  test('addColor adds color to favorites', () => {
    const newColor = new Color;
    newColor.addColor('blue');
    newColor.addColor('red');
    expect(newColor.hasColor('green')).toEqual(false);
  });



});
