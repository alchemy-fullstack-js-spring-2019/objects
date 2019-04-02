const { Car } = require('../lib/Car.js');

describe('Car class properties test', () => {
  it('has the property: make', () => {
    const result = new Car('Fjord');
    expect(result.make).toEqual('Fjord');
  });
  it('has the property: model', () => {
    const result = new Car('Fjord', 'Model Yeet');
  
    expect(result.model).toEqual('Model Yeet');
  });
  it('has the properties: year color and miles', () => {
    const result = new Car('Fjord', 'Model Yeet', 2042, 'lime');
  
    expect(result.year).toEqual(2042);
    expect(result.color).toEqual('lime');
    expect(result.miles).toEqual(0);
  });
});
