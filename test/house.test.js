const House = require('../lib/house');

describe('Creates House Class', () => {
  it('Has LOCATION property ', () => {
    const option1 = new House('Montavilla', 'wood', 4, 2);
    expect(option1.location).toEqual('Montavilla');
  });

  it('Has FLOORS property ', () => {
    const option1 = new House('Montavilla', 'wood', 4, 2);
    expect(option1.floors).toEqual('wood');
  });

  it('Has BEDROOMS property ', () => {
    const option1 = new House('Montavilla', 'wood', 4, 2);
    expect(option1.bedrooms).toEqual(4);
  });

  it('Has BATHROOMS property ', () => {
    const option1 = new House('Montavilla', 'wood', 4, 2);
    expect(option1.bathrooms).toEqual(2);
  });

  it('Has a method CALCULATE', () => {
    const option1 = new House('Montavilla', 'wood', 4, 2);
    expect(option1.calculate()).toEqual(100000);
  });
});
