const Car = require('../lib/car');

describe('Car Class', () => {
  it('Has MAKE property', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    expect(car1.make).toEqual('Honda');  
  });
  
  it('Has MODEL property', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    expect(car1.model).toEqual('Odyssey');  
  });

  it('Has YEAR property', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    expect(car1.year).toEqual(2008);  
  });

  it('Has COLOR property', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    expect(car1.color).toEqual('Silver');  
  });

  it('Has MILES property', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    expect(car1.miles).toEqual(0);  
  });

  it('Cumulative total of miles driven', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    car1.drive(10);
    expect(car1.miles).toEqual(10);

    car1.drive(50);
    expect(car1.miles).toEqual(60);
  });

});
