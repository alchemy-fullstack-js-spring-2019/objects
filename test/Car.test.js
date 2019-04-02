const Car = require('../lib/Car');

var car = new Car('Ford', 'Model T', '1910', 'black', 0);
describe('car class with make, model, year, color, miles', () => {
  
  it('has the expected make', () => { 
    expect(car.make).toEqual('Ford');
  });
  it('has the expected model', () => { 
    expect(car.model).toEqual('Model T');
  });
  it('has the expected year', () => { 
    expect(car.year).toEqual('1910');
  });
  it('has the expected color', () => { 
    expect(car.color).toEqual('black');
  });
  it('has the expected miles', () => { 
    expect(car.miles).toEqual(0);
  });
});
