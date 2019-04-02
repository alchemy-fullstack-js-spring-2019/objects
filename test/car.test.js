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
    expect(car1.miles).toEqual(100000);  
  });

});
