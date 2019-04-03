const { 
  CarClass } = require('../lib/car');

describe('CarClass', () => {
  it('car has a make', () => {
    const car = new CarClass('honda');
    expect(car.make).toEqual('honda');
  });
  it('has miles', () => {
      
  })
  it('car can be driven', () => {

  });

});
