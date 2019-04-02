const Car = require('../lib/car');

describe('Car Class', () => {
  it('Has MAKE property', () => {
    const car1 = new Car('Honda', 'Odyssey', 2008, 'Silver', 100000);
    expect(car1.make).toEqual('Honda');  
  });

});
